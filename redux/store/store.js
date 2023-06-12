import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";
import movieReducer from "../slices/slice-search";

const persistConfig = {
  key: "root",
  storage,
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
