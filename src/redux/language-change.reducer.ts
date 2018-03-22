import { ILanguage } from './../models/language';
import { Action } from '@ngrx/store';

export const LANGUAGE_CHANGE = 'LANGUAGE_CHANGE';

export function languageChangeReducer(state: ILanguage = { name : '' }, action) {
  switch (action.type) {
    case LANGUAGE_CHANGE:
        return { name : action.payload };
    default:
        return state;
    }
}