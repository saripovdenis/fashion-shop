import { Action } from '../../types';

export function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
  return { type, payload };
}
