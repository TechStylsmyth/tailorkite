export interface Service {
  id: string;
  name: string;
  icon: string;
  category_id: string;
  photos: { url: string; caption?: string }[];
  before_after: {
    id: number;
    before_image_url: string;
    after_image_url: string;
  }[];
  description_image_urls: { id: number; image_url: string }[];
  description_pointers: { id: number; description_point: string }[];
}

export interface ServicesInfo {
  categories: { id: string; name: string; icon: string }[];
  services: Service[];
}
