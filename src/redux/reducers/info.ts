import { produce } from 'immer';
import { PushShippingAction, PushBillingAction, PushPaymentAction } from '../actions/info';
import {
  PushShippingActionType,
  PushBillingActionType,
  PushPaymentActionType,
} from '../actions/constants';

import { InfoShipping, InfoState, InfoBilling, InfoPayment } from '../../types';

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

type Actions = PushShippingAction | PushBillingAction | PushPaymentAction;

const cart = (state: InfoState = initialState, action: Actions) => {
  switch (action.type) {
    case PushShippingActionType:
      return reducePushShippingAction(state, action.payload);
    case PushBillingActionType:
      return reducePushBillingAction(state, action.payload);
    case PushPaymentActionType:
      return reducePushPaymentAction(state, action.payload);

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

function reducePushPaymentAction(state: InfoState, info: InfoPayment) {
  return produce(state, (draft) => {
    draft.payment = {
      name: info.name,
      card: info.card,
      date: info.date,
      code: info.code,
    };
  });
}

export default cart;
