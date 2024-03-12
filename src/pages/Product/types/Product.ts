export interface Group {
  userGroupId: number
  userGroupName: string
}
export interface Product {
  userId: number
  userName: string
  userUpdateClass: string
  group: Group
  userEmailAddress: string
  userStartDate: string
  userEndDate: string
  userLockoutFlg: number
}
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
