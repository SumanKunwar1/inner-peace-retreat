import monastery from "@/assets/monastery.jpg";
import avalokiteshvara from "@/assets/avalokiteshvara.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  thumb: string;
  caption: string;
};

export type Retreat = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  coverImage: string;
  totalMedia: number;
  upcoming: boolean;
  media: MediaItem[];
};

export const retreats: Retreat[] = [
  {
    id: 1,
    title: "1st International Ngyungne",
    subtitle: "A sacred beginning",
    date: "December 2024",
    location: "Kathmandu, Nepal",
    coverImage: monastery,
    totalMedia: 6,
    upcoming: false,
    media: [
      { type: "image", src: heroBg,          thumb: heroBg,          caption: "Opening ceremony blessings" },
      { type: "image", src: avalokiteshvara, thumb: avalokiteshvara, caption: "Sacred Avalokiteshvara" },
      { type: "image", src: monastery,       thumb: monastery,       caption: "Monastery venue" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: heroBg, caption: "Retreat highlights reel" },
      { type: "image", src: heroBg,          thumb: heroBg,          caption: "Group meditation session" },
      { type: "image", src: avalokiteshvara, thumb: avalokiteshvara, caption: "Evening puja ceremony" },
    ],
  },
  {
    id: 2,
    title: "2nd International Ngyungne",
    subtitle: "Deepening the practice",
    date: "December 28, 2025 – January 4, 2026",
    location: "Kathmandu, Nepal",
    coverImage: heroBg,
    totalMedia: 0,
    upcoming: true,
    media: [],
  },
];