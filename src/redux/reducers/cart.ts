import { AddItemAction, RemoveItemAction } from '../actions/cart';
import { AddItemActionType, RemoveItemActionType } from '../actions/constants';

import { CartState } from '../../types';

const initialState: CartState = {
  items: [],
  subtotal: 0,
  shipping: 0,
  taxes: 0,
  total: 0,
};

type Actions = AddItemAction | RemoveItemAction;

const cart = (state: CartState = initialState, action: Actions) => {
  switch (action.type) {
    case AddItemActionType:
      return reduceAddItemAction;

    case RemoveItemActionType:
      return reduceRemoveItemAction;
  }
};

function reduceAddItemAction(state: CartState, action: AddItemAction): CartState {
  return initialState;
}

function reduceRemoveItemAction(state: CartState, action: RemoveItemAction): CartState {
  return initialState;
}

export default cart;
