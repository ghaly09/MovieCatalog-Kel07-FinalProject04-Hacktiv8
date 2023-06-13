import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { createWrapper } from "next-redux-wrapper";
import movieReducer from "../slices/slice-search";

const persistConfig = {
  key: "root",
  storage: storageSession,
  version: 1,
};

const rootReducers = combineReducers({
  movie: movieReducer,
});

const persist = persistReducer(persistConfig, rootReducers);

const store = () =>
  configureStore({
    reducer: persist,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

export const wrapper = createWrapper(store);
