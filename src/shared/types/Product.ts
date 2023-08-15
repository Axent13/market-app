export interface Product {
  id: string;
  images: string[];
  price: number;
  title: string;
  category: string;
}

export type Products = Product[];

export type Categories = string[];
