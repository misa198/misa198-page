import { configureStore, EnhancedStore, ThunkAction } from '@reduxjs/toolkit';
import {
  createRouterMiddleware,
  initialRouterState,
  routerReducer,
} from 'connected-next-router';
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import { AppContext } from 'next/app';
import Router from 'next/router';
import { Action, AnyAction, combineReducers, Reducer } from 'redux';
import blogsReducer from './slices/blogs.slice';
import homeReducer from './slices/home.slice';

const routerMiddleware = createRouterMiddleware();

const rootReducer = combineReducers({
  router: routerReducer,
  home: homeReducer,
  blogs: blogsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const reducer: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (typeof window !== 'undefined' && state?.router) {
      nextState.router = state.router;
    }
    return nextState;
  }
  return rootReducer(state, action);
};

const makeStore: MakeStore<any> = (context): EnhancedStore => {
  const { asPath } = (context as AppContext).ctx || Router.router || {};

  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(routerMiddleware),
    preloadedState: {
      router: initialRouterState(asPath),
    },
  });
};

export const wrapper = createWrapper(makeStore);
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = ReturnType<AppStore['dispatch']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
