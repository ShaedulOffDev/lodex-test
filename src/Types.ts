export interface ProductI {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export interface BlogI {
  id: number;
  title: string;
  descriptions: string;
  comments_count: number;
  views: number;
  created_at: string;
  image: string;
}
