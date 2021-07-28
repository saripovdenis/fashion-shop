export interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}

export interface CartState {
  items: CartItems;
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
}

interface CartItems {
  [key: number]: CartObject;
}

export interface CartObject {
  name: string;
  count: number;
  img: string;
  description: CartObjectDescription;
}

interface CartObjectDescription {
  color: string;
  quantity: number;
}
