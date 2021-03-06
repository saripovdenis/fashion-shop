export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
}

export interface RootState {
  cart: CartState;
  info: InfoState;
}

export interface InfoState {
  shipping: InfoShipping;
  billing: InfoBilling;
  payment: InfoPayment;
  success: boolean;
}

export interface InfoShipping {
  name: string;
  phone: string;
  address: string;
  suite?: string;
  city: string;
  country: string;
  zip: string;
  submited: boolean;
}

export interface InfoBilling {
  name: string;
  email: string;
  address: string;
  suite?: string;
  city: string;
  country: string;
  zip: string;
  submited: boolean;
}

export interface InfoPayment {
  name: string;
  card: string;
  date: string;
  code: string;
  submited: boolean;
}

export interface CartState {
  items: CartItems;
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
}

export interface CartItems extends Array<CartObject> {
  [key: number]: CartObject;
}

export interface CartObject {
  name: string;
  img: string;
  color: string;
  price: number;
  quantity: number;
  id: number;
}
