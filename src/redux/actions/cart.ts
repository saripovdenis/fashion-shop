import { AddItemActionType, RemoveItemActionType } from './constants';
import { Action } from '../../types';
import { createAction } from './createAction';

export type AddItemAction = Action<typeof AddItemActionType, number>;
export type RemoveItemAction = Action<typeof RemoveItemActionType, number>;

export function createAddItemAction(id: number): AddItemAction {
  return createAction(AddItemActionType, id);
}

export function createRemoveItemAction(id: number): RemoveItemAction {
  return createAction(RemoveItemActionType, id);
}
