import createState from 'react-copy-write';

interface IAppState {
  authorized: boolean,
  user: object | null
}

const appState: IAppState = {
  authorized: false,
  user: null
};

export const { Provider, Consumer, createSelector, mutate } = createState(appState);

/* ACTIONS */

export const authorize = (authorized: boolean) => mutate(draft => {
  draft.authorized = authorized;
});

export const setUser = (user: object) => mutate(draft => {
  draft.user = user;
});

/* SELECTORS */

const selectUserFn: any = (state: IAppState) => state.user;
export const selectUser = createSelector(selectUserFn);

const selectAuthorizedFn: any = (state: IAppState) => state.authorized;
export const selectAuthorized = createSelector(selectAuthorizedFn);
