export interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  // description: string;
  categoryId: string;
}

export interface ICategory {
  _id: string;
  name: string;
  product: string
}

export interface IUser {
  _id: string;
  name: string;
  password: string;
  confirmpass: string;
  role:string
}
