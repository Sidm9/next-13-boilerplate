import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeSlice from './features/theme/themeSlice';

const persistConfig = {
  key: 'the-app',
  storage,
}

const reducers = combineReducers({
  counter: counterSlice,
  theme: themeSlice
})

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)