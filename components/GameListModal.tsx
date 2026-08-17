"use client";

import { useState, useEffect } from "react";
import { X, Search, Gamepad2, MessageCircle } from "lucide-react";

interface GameListModalProps {
  isOpen: boolean;
  onClose: () => void;
  unitName: string;
  consoleType?: string;
  games: string[];
  onOpenBooking?: () => void;
}

export default function GameListModal({
  isOpen,
  onClose,
  unitName,
  consoleType = "PlayStation",
  games,
  onOpenBooking,
}: GameListModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
    }
    return () => {
      document.body.classList.remove("scroll-locked");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredGames = games.filter((game) =>
    game.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Card */}
      <div className="bg-[#08090B] border border-[#242832] w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#242832] flex items-center justify-between bg-[#111318]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1FA6F0]/10 border border-[#1FA6F0]/20 flex items-center justify-center text-[#1FA6F0] shrink-0">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">Daftar Game Tersedia</h3>
              <p className="text-xs text-zinc-400 font-mono">
                {unitName} · <span className="text-[#1FA6F0] font-semibold">{consoleType}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-[#242832] transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 sm:px-6 py-3 border-b border-[#242832] bg-[#0d0e12]">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul game..."
              className="w-full bg-[#111318] border border-[#242832] text-base sm:text-sm text-white placeholder-zinc-500 pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-[#1FA6F0] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 text-xs text-zinc-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
          <div className="flex items-center justify-between mt-2 text-[11px] text-zinc-400 font-mono">
            <span>Menampilkan {filteredGames.length} dari {games.length} game</span>
            {searchQuery && <span>Filter: "{searchQuery}"</span>}
          </div>
        </div>

        {/* List Content */}
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {filteredGames.map((game, idx) => (
                <div
                  key={idx}
                  className="py-2 px-3 rounded-lg hover:bg-[#111318] border-b border-[#1a1d24]/50 flex items-center justify-between text-xs sm:text-sm text-zinc-200 transition-colors"
                >
                  <span className="font-medium">{game}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1FA6F0]/60 shrink-0 ml-2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-zinc-400 text-sm font-medium">
              <p>Tidak ada game yang cocok.</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#242832] bg-[#111318] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-400 font-mono text-center sm:text-left">
            Siap dimainkan langsung di unit ini
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-[#242832] text-xs font-semibold text-zinc-300 hover:text-white hover:bg-[#1f232c] transition-colors"
            >
              Tutup
            </button>
            {onOpenBooking && (
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-[#1FA6F0] hover:opacity-90 text-black font-bold text-xs flex items-center justify-center gap-2 transition-opacity"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-black/20" />
                <span>Booking Unit Ini</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
