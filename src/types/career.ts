export interface CareerInfo {
  categories: { id: string; name: string }[];
  openings: OpeningsData[];
  frequently_asked_questions: FAQ[];
}

export interface OpeningsData {
  title: string;
  location: string;
  category: string;
  job_post_url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
