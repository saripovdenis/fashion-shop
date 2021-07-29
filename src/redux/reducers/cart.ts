import { AddItemAction, RemoveItemAction } from '../actions/cart';
import { AddItemActionType, RemoveItemActionType } from '../actions/constants';

import { CartState } from '../../types';

const initialState: CartState = {
  items: [
    { name: 'The Chelsea Boot', img: '123', color: 'Black', quantity: 1, price: 235 },
    {
      name: 'The Twill Snap Backpack',
      img: '123',
      color: 'Reverse Denim + Brown leather',
      quantity: 1,
      price: 65,
    },
    {
      name: 'The Twill Zip Tote',
      img: '123',
      color: 'Reverse Denim + Brown leather',
      quantity: 1,
      price: 48,
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
      return reduceAddItemAction;

    case RemoveItemActionType:
      return reduceRemoveItemAction;

    default:
      return state;
  }
};

function reduceAddItemAction(state: CartState, action: AddItemAction): CartState {
  return initialState;
}

function reduceRemoveItemAction(state: CartState, action: RemoveItemAction): CartState {
  return initialState;
}

export default cart;
