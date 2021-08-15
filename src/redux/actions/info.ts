import {
  PushBillingActionType,
  PushShippingActionType,
  PushPaymentActionType,
  PushSuccessActionType,
} from './constants';
import { Action, InfoBilling, InfoShipping, InfoPayment } from '../../types';
import { createAction } from './createAction';

export type PushShippingAction = Action<typeof PushShippingActionType, InfoShipping>;
export type PushBillingAction = Action<typeof PushBillingActionType, InfoBilling>;
export type PushPaymentAction = Action<typeof PushPaymentActionType, InfoPayment>;
export type PushSuccessAction = Action<typeof PushSuccessActionType, null>;

export function createPushShippingAction(info: InfoShipping): PushShippingAction {
  return createAction(PushShippingActionType, info);
}

export function createPushBillingAction(info: InfoBilling): PushBillingAction {
  return createAction(PushBillingActionType, info);
}

export function createPushPaymentAction(info: InfoPayment): PushPaymentAction {
  return createAction(PushPaymentActionType, info);
}

export function createPushSuccessAction(): PushSuccessAction {
  return createAction(PushSuccessActionType, null);
}
