import { produce } from 'immer';
import { PushShippingAction, PushBillingAction } from '../actions/info';
import { PushShippingActionType, PushBillingActionType } from '../actions/constants';

import { InfoShipping, InfoState, InfoBilling } from '../../types';

const initialState: InfoState = {
  shipping: {
    name: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zip: '',
  },
  billing: {
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: '',
  },
  payment: {
    name: '',
    card: '',
    date: '',
    code: '',
  },
};

type Actions = PushShippingAction | PushBillingAction;

const cart = (state: InfoState = initialState, action: Actions) => {
  switch (action.type) {
    case PushShippingActionType:
      return reducePushShippingAction(state, action.payload);
    case PushBillingActionType:
      return reducePushBillingAction(state, action.payload);

    default:
      return state;
  }
};

function reducePushShippingAction(state: InfoState, info: InfoShipping) {
  return produce(state, (draft) => {
    draft.shipping = {
      name: info.name,
      phone: info.phone,
      address: info.address,
      suite: info.suite ? info.suite : undefined,
      city: info.city,
      country: info.country,
      zip: info.zip,
    };
  });
}

function reducePushBillingAction(state: InfoState, info: InfoBilling) {
  return produce(state, (draft) => {
    draft.billing = {
      name: info.name,
      email: info.email,
      address: info.address,
      suite: info.suite ? info.suite : undefined,
      city: info.city,
      country: info.country,
      zip: info.zip,
    };
  });
}

export default cart;
