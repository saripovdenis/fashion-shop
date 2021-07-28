import { AddItemActionType, RemoveItemActionType } from './constants';
import { Action } from '../../types';
import { createAction } from './createAction';

export type AddItemAction = Action<typeof AddItemActionType, void>;
export type RemoveItemAction = Action<typeof RemoveItemActionType, void>;

export function createAddItemAction(): AddItemAction {
  return createAction(AddItemActionType, null as any);
}

export function createRemoveItemAction(): RemoveItemAction {
  return createAction(RemoveItemActionType, null as any);
}
