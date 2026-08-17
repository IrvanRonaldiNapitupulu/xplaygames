export interface UnitGameLibrary {
  unitIdentifier: string; // stationName or stationId string representation
  consoleType: "PS4" | "PS5";
  games: string[];
}

// 1. Shared PS4 Game Library (Default for PS4 Floor 1 & Floor 2)
export const SHARED_PS4_GAMES: string[] = [
  "A Way Out",
  "Assassin Creed Mirage",
  "Call of Duty : Modern Warfare Remastered",
  "Crash Team Racing Nitro- Fueled",
  "Dynasty Warrior 9",
  "EA Sports FC 26",
  "eFootball PES 2026",
  "Eiyuden Chronicle: Hundred Heroes",
  "God of War Ragnarok",
  "Grand Theft Auto V",
  "Gran Turismo 7",
  "Guns Gore and Cannoli",
  "Guns Gore and Cannoli 2",
  "It Takes Two",
  "Marvel Spiderman",
  "Minecraft",
  "Mortal Kombat 11",
  "Moto GP 25",
  "Moving Out 2",
  "NARUTO X Boruto Ultimate Ninja Storm Connections",
  "NBA 2K26",
  "Overcooked! All You Can Eat",
  "Red Dead Redemption 2",
  "Resident Evil 2 Remake",
  "Resident Evil 3 Remake",
  "Resident Evil 4 Remake",
  "Romance of the 3 Kingdoms XIV",
  "Street Fighter 6",
  "Tekken 7",
  "The Last of Us Remastered",
  "The Last of Us Part II",
  "Trine 5 : A Clockwork Conspiracy",
  "UFC 4",
  "Uncharted 4",
  "WWE 2K25",
];

// 2. Unit No. 9 — PS5
export const UNIT_9_GAMES: string[] = [
  "A Way Out",
  "Alone in the Dark",
  "Cyberpunk 2077",
  "Death Stranding 2",
  "Diablo IV",
  "Dragon Ball: Sparking! ZERO",
  "EA FC 26",
  "eFootball PES",
  "eFootball",
  "Ender Lilies : Quietus of the Knights",
  "F1 24",
  "Fall Guys",
  "Gran Turismo 7",
  "GTA V",
  "It Takes Two",
  "King of Fighters XV",
  "Mortal Kombat 1",
  "MotoGP 24",
  "Moving Out 2",
  "NBA 2K25",
  "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 ROAD TO BORUTO",
  "Overcooked 2",
  "Roblox",
  "Sifu",
  "Skul",
  "Sonic Colors: Ultimate",
  "SpongeBob SquarePants: The Cosmic Shake",
  "STAR WARS Jedi: Fallen Order",
  "Super Mega Baseball 4",
  "Teenage Mutant Ninja Turtles: The Cowabunga Collection",
  "TEKKEN 8",
  "Trine 4: The Nightmare Prince",
  "UFC 5",
  "Unravel TWO",
  "WWE 2K24",
];

// 3. VIP — PS5
export const VIP_GAMES: string[] = [
  "A Way Out",
  "Alone in the Dark",
  "Cyberpunk 2077",
  "Death Stranding 2",
  "Diablo IV",
  "Dragon Ball: Sparking! ZERO",
  "EA FC 26",
  "eFootball PES",
  "eFootball",
  "Ender Lilies : Quietus of the Knights",
  "F1 24",
  "Fall Guys",
  "Gran Turismo 7",
  "GTA V",
  "It Takes Two",
  "King of Fighters XV",
  "Mortal Kombat 1",
  "MotoGP 24",
  "Moving Out 2",
  "NBA 2K25",
  "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 ROAD TO BORUTO",
  "Overcooked 2",
  "Red Dead Redemption 2",
  "Skul",
  "Sonic Colors: Ultimate",
  "SpongeBob SquarePants: The Cosmic Shake",
  "Super Mega Baseball 4",
  "Teenage Mutant Ninja Turtles: The Cowabunga Collection",
  "TEKKEN 8",
  "The Witcher 3: Wild Hunt - Game of the Year Edition",
  "Trine 4: The Nightmare Prince",
  "UFC 5",
  "Unravel TWO",
  "WWE 2K24",
];

// 4. Unit No. 17 — PS4
export const UNIT_17_GAMES: string[] = [
  "A Way Out",
  "EA Sports FC 26",
  "eFootball PES 2026",
  "Guns Gore and Cannoli",
  "Guns Gore and Cannoli 2",
  "It Takes Two",
  "Mortal Kombat 11",
  "Moto GP 25",
  "Moving Out 2",
  "NARUTO X Boruto Ultimate Ninja Storm Connections",
  "NBA 2K26",
  "Overcooked! All You Can Eat",
  "Street Fighter 6",
  "Tekken 7",
  "Trine 5 : A Clockwork Conspiracy",
  "UFC 4",
  "WWE 2K25",
];

// 5. Unit No. 18 — PS5
export const UNIT_18_GAMES: string[] = [
  "A Way Out",
  "Alone in the Dark",
  "Call of Duty Black Ops Cold War",
  "Cyberpunk 2077",
  "Death Stranding 2",
  "Diablo IV",
  "Dragon Ball: Sparking! ZERO",
  "EA FC 26",
  "eFootball",
  "eFootball PES",
  "Eiyuden Chronicle: Hundred Heroes",
  "F1 24",
  "Fall Guys",
  "God of War",
  "God of War Ragnarok",
  "Gran Turismo 7",
  "GTA V",
  "It Takes Two",
  "King of Fighters XV",
  "Mafia II",
  "Marvel Spiderman",
  "Mortal Kombat 1",
  "MotoGP 24",
  "Moving Out 2",
  "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
  "NBA 2K25",
  "Overcooked 2",
  "Red Dead Redemption 2",
  "Resident Evil 3",
  "Roblox",
  "Sonic Colors: Ultimate",
  "Street Fighter 5",
  "Stumble Guys",
  "Tekken 8",
  "The Crew 2",
  "The Last of Us Remastered",
  "Trine 4",
  "UFC 5",
  "Unravel Two",
  "WWE 2K24",
];

// 6. VVIP 1 — PS5
export const VVIP_1_GAMES: string[] = [
  "A Way Out",
  "Among Us",
  "Alone in the Dark",
  "Black Myth: Wu Kong",
  "Call of Duty MODERN WARFARE III",
  "Cyberpunk 2077",
  "Death Stranding 2",
  "Diablo IV",
  "Dragon Ball: Sparking! ZERO",
  "EA FC 26",
  "eFootball PES",
  "eFootball",
  "F1 24",
  "Fall Guys",
  "Gran Turismo 7",
  "GTA V",
  "It Takes Two",
  "King of Fighters XV",
  "Little Nightmare II",
  "Marvel Spiderman",
  "Mortal Kombat 1",
  "MotoGP 24",
  "Moving Out 2",
  "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
  "NBA 2K25",
  "Overcooked 2",
  "Red Dead Redemption 2",
  "Roblox",
  "Sifu",
  "SpongeBob SquarePants: The Cosmic Shake",
  "Stumble Guys",
  "Super Mega Baseball 4",
  "TEKKEN 8",
  "Trine 4: The Nightmare Prince",
  "UFC 5",
  "Unravel Two",
  "WWE 2K24",
];

// 7. VVIP 2 — PS5
export const VVIP_2_GAMES: string[] = [
  "A Way Out",
  "Alone in the Dark",
  "Black Myth: Wu Kong",
  "Call of Duty MODERN WARFARE III",
  "Cyberpunk 2077",
  "Death Stranding 2",
  "Diablo IV",
  "Dragon Ball: Sparking! ZERO",
  "EA FC 26",
  "eFootball PES",
  "eFootball",
  "F1 24",
  "Gran Turismo 7",
  "GTA V",
  "It Takes Two",
  "King of Fighters XV",
  "Mortal Kombat 1",
  "MotoGP 24",
  "Moving Out 2",
  "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
  "NBA 2K25",
  "Overcooked 2",
  "Red Dead Redemption 2",
  "Sonic Colors: Ultimate",
  "STAR WARS Jedi: Fallen Order",
  "Stumble Guys",
  "Teenage Mutant Ninja Turtles: The Cowabunga Collection",
  "TEKKEN 8",
  "UFC 5",
  "Unravel Two",
  "WWE 2K24",
];

/**
 * Helper to get exact game list for a station by its name or ID
 */
export function getGamesForStation(stationName: string, stationId?: number | string, consoleType?: string): string[] {
  const nameUpper = (stationName || "").toUpperCase();
  const consoleUpper = (consoleType || "").toUpperCase();
  const idStr = String(stationId || "");

  // Match VVIP 1 vs VVIP 2 vs VVIP
  if (nameUpper.includes("VVIP 1") || idStr === "20" || nameUpper.includes("VVIP1")) {
    return VVIP_1_GAMES;
  }
  if (nameUpper.includes("VVIP 2") || idStr === "21" || nameUpper.includes("VVIP2")) {
    return VVIP_2_GAMES;
  }
  if (nameUpper.includes("VVIP")) {
    return VVIP_1_GAMES; // Fallback VVIP
  }

  // Match VIP
  if (nameUpper.includes("VIP") && !nameUpper.includes("VVIP")) {
    return VIP_GAMES;
  }

  // Match Unit No 9
  if (nameUpper.includes("UNIT 9") || nameUpper.includes("UNIT NO. 9") || nameUpper.includes("NO. 9") || idStr === "9") {
    return UNIT_9_GAMES;
  }

  // Match Unit No 17
  if (nameUpper.includes("UNIT 17") || nameUpper.includes("UNIT NO. 17") || nameUpper.includes("NO. 17") || idStr === "17") {
    return UNIT_17_GAMES;
  }

  // Match Unit No 18
  if (nameUpper.includes("UNIT 18") || nameUpper.includes("UNIT NO. 18") || nameUpper.includes("NO. 18") || idStr === "18") {
    return UNIT_18_GAMES;
  }

  // Default for any PS5 console
  if (consoleUpper.includes("PS5") || nameUpper.includes("PS5")) {
    return UNIT_9_GAMES;
  }

  // Default: Shared PS4 library
  return SHARED_PS4_GAMES;
}

// Popular / Featured Games preview for Homepage Section
export const POPULAR_GAMES_HIGHLIGHT = [
  { name: "EA Sports FC 26 / EA FC 26", category: "Sports / Sepak Bola", units: "Tersedia di Semua Unit" },
  { name: "eFootball PES 2026", category: "Sports / Sepak Bola", units: "Tersedia di Semua Unit" },
  { name: "GTA V / Grand Theft Auto V", category: "Action Open World", units: "Tersedia di Semua Unit" },
  { name: "God of War Ragnarok", category: "Action Adventure", units: "PS4 & Unit Selected" },
  { name: "Tekken 8 / Tekken 7", category: "Fighting", units: "Tersedia di Semua Unit" },
  { name: "Black Myth: Wu Kong", category: "Action RPG Next-Gen", units: "VVIP Room 1 & 2" },
  { name: "It Takes Two", category: "Co-op Multiplayer", units: "Tersedia di Semua Unit" },
  { name: "Mortal Kombat 1 / MK 11", category: "Fighting", units: "Tersedia di Semua Unit" },
  { name: "Call of Duty MW III / Cold War", category: "Shooter FPS", units: "PS5 Units & VVIP" },
  { name: "Gran Turismo 7", category: "Racing Simulation", units: "Tersedia di Semua Unit" },
  { name: "Moving Out 2 & Overcooked 2", category: "Party / Family", units: "Tersedia di Semua Unit" },
  { name: "WWE 2K25 / 2K24", category: "Wrestling Sports", units: "Tersedia di Semua Unit" },
];

export interface GameCategory {
  id: string;
  name: string;
  description: string;
  sampleTitles: string[];
}

export const GAME_CATEGORIES: GameCategory[] = [
  {
    id: "sports",
    name: "Sports & Football",
    description: "Nikmati pertarungan sengit di lapangan hijau dan arena olahraga favoritmu.",
    sampleTitles: ["EA Sports FC 26", "eFootball PES 2026", "NBA 2K26", "WWE 2K25", "MotoGP 25", "F1 24"],
  },
  {
    id: "action",
    name: "Action & Open World",
    description: "Petualangan seru dengan petualangan bebas dan grafis visual yang luar biasa.",
    sampleTitles: ["GTA V", "God of War Ragnarok", "Black Myth: Wu Kong", "Red Dead Redemption 2", "Cyberpunk 2077"],
  },
  {
    id: "fighting",
    name: "Fighting & Arcade",
    description: "Adu mekanik 1v1 bersama teman mabar dengan jurus combo terbaik.",
    sampleTitles: ["Tekken 8", "Tekken 7", "Mortal Kombat 1", "Street Fighter 6", "Naruto Storm Connections"],
  },
  {
    id: "coop",
    name: "Co-op & Party Games",
    description: "Pilihan terbaik untuk mabar rame-rame 2 sampai 4 stik sekaligus.",
    sampleTitles: ["It Takes Two", "A Way Out", "Moving Out 2", "Overcooked 2", "Stumble Guys", "Among Us"],
  },
];
