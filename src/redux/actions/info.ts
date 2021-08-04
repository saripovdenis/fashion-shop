import { PushBillingActionType, PushShippingActionType } from './constants';
import { Action, InfoBilling, InfoShipping } from '../../types';
import { createAction } from './createAction';

export type PushShippingAction = Action<typeof PushShippingActionType, InfoShipping>;
export type PushBillingAction = Action<typeof PushBillingActionType, InfoBilling>;

export function createPushShippingAction(info: InfoShipping): PushShippingAction {
  return createAction(PushShippingActionType, info);
}

export function createPushBillingAction(info: InfoBilling): PushBillingAction {
  return createAction(PushBillingActionType, info);
}
