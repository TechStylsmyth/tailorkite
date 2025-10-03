export interface Moments {
  year: string;
  photo_url: string;
  title: string;
  sub_title: string;
}

export interface Testimonials {
  name: string;
  designation: string;
  message: string;
}

export interface LifeAtStylInfo {
  moments: Moments[];
  testimonials: Testimonials[];
}
