import {createSelector} from '@ngrx/store';

// Memo-ised function - stores the result in memory and will only evaluate if it hasn't already.
export const isLoggedIn = createSelector(
  state => state["auth"],
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);