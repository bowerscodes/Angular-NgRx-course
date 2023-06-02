import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './reducers'


export const selectAuthState = 
  createFeatureSelector<AuthState>("auth");

// Memo-ised function - stores the result in memory and will only evaluate if it hasn't already.
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
