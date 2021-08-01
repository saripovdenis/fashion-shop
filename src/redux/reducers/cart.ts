import { produce } from 'immer';
import { AddItemAction, RemoveItemAction } from '../actions/cart';
import { AddItemActionType, RemoveItemActionType } from '../actions/constants';

import { CartObject, CartState } from '../../types';

const initialState: CartState = {
  items: [
    {
      name: 'The Chelsea Boot',
      img: '123',
      color: 'Black',
      quantity: 1,
      price: 235,
      id: 0,
    },
    {
      name: 'The Twill Snap Backpack',
      img: '123',
      color: 'Reverse Denim + Brown leather',
      quantity: 1,
      price: 65,
      id: 1,
    },
    {
      name: 'The Twill Zip Tote',
      img: '123',
      color: 'Reverse Denim + Brown leather',
      quantity: 1,
      price: 48,
      id: 2,
    },
  ],
  subtotal: 398,
  shipping: 0,
  taxes: 12.12,
  total: 410.12,
};

type Actions = AddItemAction | RemoveItemAction;

const cart = (state: CartState = initialState, action: Actions) => {
  switch (action.type) {
    case AddItemActionType:
      return reduceAddItemAction(state, action);

    case RemoveItemActionType:
      return reduceRemoveItemAction(state, action);

    default:
      return state;
  }
};

function reduceAddItemAction(state: CartState, action: AddItemAction): CartState {
  return produce(state, (draft) => {
    let cartObj = draft.items.find((obj) => obj.id === action.payload);
    if (cartObj !== undefined) {
      cartObj.quantity += 1;
      draft.subtotal += cartObj.price;
      draft.total += cartObj.price;
    }
  });
}

function reduceRemoveItemAction(state: CartState, action: RemoveItemAction): CartState {
  return produce(state, (draft) => {
    let cartObj = draft.items.find((obj) => obj.id === action.payload);
    if (cartObj !== undefined && cartObj.quantity > 1) {
      cartObj.quantity -= 1;
      draft.subtotal -= cartObj.price;
      draft.total = draft.subtotal + draft.taxes + draft.shipping;
    }
  });
}

export default cart;
