import { configureStore, EnhancedStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import { Action, AnyAction, combineReducers, Reducer } from 'redux';
import blogsReducer from './slices/blogs.slice';
import homeReducer from './slices/home.slice';

const rootReducer = combineReducers({
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
    return nextState;
  }
  return rootReducer(state, action);
};

const makeStore: MakeStore<any> = (): EnhancedStore => {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
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
