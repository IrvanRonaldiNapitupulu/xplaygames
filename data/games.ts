export interface GameCategory {
  id: string;
  name: string;
  badge: string;
  description: string;
  iconName: string;
  sampleTitles: string[];
}

export const GAME_CATEGORIES: GameCategory[] = [
  {
    id: "sports",
    name: "Sports & Soccer",
    badge: "MABAR FAVORITE",
    description: "Genre paling ramai untuk turnamen mabar dan duel sengit antar sahabat.",
    iconName: "Trophy",
    sampleTitles: ["FC Series / eFootball", "NBA 2K Series"],
  },
  {
    id: "fighting",
    name: "Fighting & Duel",
    badge: "1 VS 1 CHOP",
    description: "Adu mekanik & combo cepat dalam pertarungan satu lawan satu.",
    iconName: "Zap",
    sampleTitles: ["Tekken Series", "Mortal Kombat Series"],
  },
  {
    id: "racing",
    name: "Racing & Speed",
    badge: "HIGH SPEED",
    description: "Balapan adu kecepatan di lintasan ekstrem dan simulasi presisi.",
    iconName: "Gauge",
    sampleTitles: ["Gran Turismo", "Need for Speed"],
  },
  {
    id: "action",
    name: "Action & Co-op",
    badge: "TEAMWORK",
    description: "Misi aksi seru dan petualangan kooperatif layar terbagi.",
    iconName: "Crosshair",
    sampleTitles: ["It Takes Two", "A Way Out"],
  },
  {
    id: "adventure",
    name: "Adventure & RPG",
    badge: "STORY DRIVEN",
    description: "Jelajahi dunia luas dengan grafis memukau 4K High Dynamic.",
    iconName: "Compass",
    sampleTitles: ["God of War", "Spider-Man"],
  },
];
