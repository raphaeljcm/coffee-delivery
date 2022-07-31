export type CoffeeType = {
  id: number;
  name: string;
  types: string[];
  content: string;
  image: string;
  price: number;
};

export type CartType = {
  id: number;
  name: string;
  price: number;
  amount: number;
  image: string;
};

export type Order = {
  street: string;
  district: string;
  number: number;
  city: string;
  acronym: string;
  orderDone: boolean;
  paymentMethod: string;
};
