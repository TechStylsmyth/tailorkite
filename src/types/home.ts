import type { FAQ } from "./career";

export interface StatItem {
  name: string;
  description: string;
  number: string; // you can change to number if you parse it
  suffix: string;
}

export interface Stats {
  numbers: StatItem[];
}

export interface HomeInfo {
  stats: Stats;
}

export interface FaqInfo {
  categories: { id: string; name: string }[];
  frequently_asked_questions: FAQ[];
}
