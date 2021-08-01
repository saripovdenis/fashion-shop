export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
}

export interface RootState {
  cart: CartState;
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
