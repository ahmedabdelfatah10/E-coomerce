export interface Product{
  category?: string;
  price?: number;
  title?: string;
  image: string;
  description?: string;
  id?:number;
  rating?:Rating
}


interface Rating{
  rate:number;
  count:number;
}
