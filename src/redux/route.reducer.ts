import { IRoute } from './../models/route';
import { Action } from '@ngrx/store';

export const ROUTE_CHANGE = 'ROUTE_CHANGE';

export function routeReducer(state: IRoute = { name : '' }, action) {
  switch (action.type) {
    case ROUTE_CHANGE:
        return { name : action.payload };
    default:
        return state;
    }
}