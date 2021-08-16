import { produce } from 'immer';

import {
  PushShippingAction,
  PushBillingAction,
  PushPaymentAction,
  PushSuccessAction,
} from '../actions/info';

import {
  PushShippingActionType,
  PushBillingActionType,
  PushPaymentActionType,
  PushSuccessActionType,
} from '../actions/constants';

import axios from 'axios';

import { InfoShipping, InfoState, InfoBilling, InfoPayment } from '../../types';

const initialState: InfoState = {
  shipping: {
    name: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    submited: false,
  },
  billing: {
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    submited: false,
  },
  payment: {
    name: '',
    card: '',
    date: '',
    code: '',
    submited: false,
  },
  success: false,
};

type Actions = PushShippingAction | PushBillingAction | PushPaymentAction | PushSuccessAction;

const cart = (state: InfoState = initialState, action: Actions) => {
  switch (action.type) {
    case PushShippingActionType:
      return reducePushShippingAction(state, action.payload);
    case PushBillingActionType:
      return reducePushBillingAction(state, action.payload);
    case PushPaymentActionType:
      return reducePushPaymentAction(state, action.payload);
    case PushSuccessActionType:
      return reducePushSuccessAction(state);

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
      submited: true,
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
      submited: true,
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
      submited: true,
    };
  });
}

function reducePushSuccessAction(state: InfoState) {
  axios.post('www.google.com', state);
  return produce(state, (draft) => {
    draft.success = true;
  });
}

export default cart;
