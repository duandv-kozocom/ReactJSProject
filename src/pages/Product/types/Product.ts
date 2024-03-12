export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  evaluate: number;
  order: number;
  type: string;
  material: string;
  customization: string;
  image: string;
  imageList: string;
  design: string,
  protection: string,
  warranty: string,
}
export interface ProductsInCart{
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  evaluate: number;
  order: number;
  type: string;
  material: string;
  customization: string;
  image: string;
  imageList: string;
  design: string,
  protection: string,
  warranty: string,
  quantity: number,
}
export interface Category{
  priceFirst: number;
  priceSecond: number;
  priceThird: number;
  versionFirst: string,
  versionSecond: string,
  versionThird: string,
}
export interface Type{
  id: string;
  nameType: string;
}