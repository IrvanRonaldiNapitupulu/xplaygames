import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Simple in-memory cache to throttle upstream requests
let cachedData: any = null;
let cacheTime = 0;
const CACHE_DURATION_MS = 30000; // 30 seconds

interface RawStation {
  idStation: number;
  namaStation: string;
  tipe: string;
  lantai: number;
  isActive: boolean;
  status: string;
  elapsedSec: number;
  totalSec: number;
  sisaSec: number;
  waktuBerakhirStr: string;
  waktuMulaiStr: string;
  isPaused: boolean;
  isOpen: boolean;
  antrianCount: number;
  antrian: any[];
}

export async function GET() {
  const now = Date.now();

  // If cache is valid, return cached data
  if (cachedData && now - cacheTime < CACHE_DURATION_MS) {
    return NextResponse.json({ ...cachedData, fromCache: true });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const response = await fetch("https://xplaygames.id/info/data", {
      signal: controller.signal,
      headers: {
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 15 }, // Next.js level fallback revalidation
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Upstream server returned status ${response.status}`);
    }

    const rawJson = await response.json();
    if (!rawJson || !Array.isArray(rawJson.stations)) {
      throw new Error("Malformed JSON response from upstream");
    }

    // Normalize station data
    const normalizedStations = rawJson.stations.map((raw: RawStation) => {
      let mappedStatus: "available" | "playing" | "paused" | "unavailable" | "unknown" = "unknown";
      
      if (raw.isPaused) {
        mappedStatus = "paused";
      } else if (raw.status === "active") {
        mappedStatus = "playing";
      } else if (raw.status === "available") {
        mappedStatus = "available";
      } else if (raw.status === "unavailable") {
        mappedStatus = "unavailable";
      }

      // Detect VIP / VVIP status based on name or console type
      let roomType: "regular" | "vip" | "vvip" = "regular";
      const checkString = `${raw.namaStation} ${raw.tipe}`.toLowerCase();
      if (checkString.includes("vvip")) {
        roomType = "vvip";
      } else if (checkString.includes("vip")) {
        roomType = "vip";
      }

      const queueList = Array.isArray(raw.antrian)
        ? raw.antrian.map((q: any) => ({
            nama: q.nama || "Pelanggan",
            mulai: q.mulai ? String(q.mulai).slice(0, 5) : "",
            selesai: q.selesai ? String(q.selesai).slice(0, 5) : "",
            catatan: q.catatan || "",
          }))
        : [];

      return {
        stationId: raw.idStation,
        stationName: raw.namaStation,
        consoleType: raw.tipe || "PS4",
        floor: raw.lantai || 1,
        status: mappedStatus,
        roomType,
        elapsedSeconds: raw.elapsedSec || null,
        remainingSeconds: raw.sisaSec || null,
        estimatedFinishAt: raw.waktuBerakhirStr || null,
        queueCount: raw.antrianCount || queueList.length || 0,
        queueList,
      };
    });

    const result = {
      stations: normalizedStations,
      updatedAt: now,
      serverNow: rawJson.serverNow || Math.floor(now / 1000),
    };

    // Update in-memory cache
    cachedData = result;
    cacheTime = now;

    return NextResponse.json({ ...result, fromCache: false });
  } catch (error: any) {
    // Only warn (not error) — 530 means upstream is temporarily down, expected during off-hours
    console.warn("[billing] Upstream unavailable:", error.message);

    // If we have stale cache, return it with a warning flag
    if (cachedData) {
      return NextResponse.json({
        ...cachedData,
        fromCache: true,
        isStale: true,
        errorMessage: error.message || "Failed to contact billing server",
      });
    }

    return NextResponse.json(
      { error: "Billing server offline", details: error.message },
      { status: 502 }
    );
  }
}
