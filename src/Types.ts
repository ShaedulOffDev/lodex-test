export interface ProductI {
  title: string;
  status: string;
  image1: string;
  price: number;
  money_type: string;
  sotuv_shakli: string;
  address: string;
  token: string;
  created_at: string;
  category: string;
  sub_category: string;
  is_favorite: boolean;
  original_price: number | null;
  xit: boolean;
}

export interface ProductDetailsI {
  token: string;
  title: string;
  description: string;
  address: string;
  district: string;
  avatar: string | null;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  is_favorite: boolean;
  money_type: string;
  price: number;
  sotuv_shakli: string;
  views: number;
}

export interface BlogI {
  id: number,
  title: string,
  descriptions: string,
  comments_count: number,
  views: number,
  created_at: string,
  image: string,
}
