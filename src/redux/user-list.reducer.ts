import { IUser } from './../models/user';
import { Action } from '@ngrx/store';

export const ADD_USERS = 'ADD_USERS';

export function userListReducer(state: IUser[] = [], action) {
  switch (action.type) {
    case ADD_USERS:
        return [...action.payload];
    default:
        return state;
    }
}