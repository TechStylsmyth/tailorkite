export interface Service {
  id: string;
  name: string;
  icon: string;
  category_id: string;
  photos: { id: number; image_url: string }[];
  before_after: {
    id: number;
    before_image_url: string;
    after_image_url: string;
  }[];
  image_urls: { id: number; image_url: string }[];
  pointers: { id: number; description_point: string }[];
}

export interface ServicesInfo {
  categories: { id: string; name: string; icon: string }[];
  services: Service[];
}
