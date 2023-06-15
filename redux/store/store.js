import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { createWrapper } from "next-redux-wrapper";
import searchReducer from "../slices/slice-search";
import favoriteReducer from "../slices/slice-favorite";
import detailReducer from "../slices/slice-detail";

const persistConfig = {
  key: "root",
  storage: storageSession,
  version: 1,
};

const rootReducers = combineReducers({
  search: searchReducer,
  favorite: favoriteReducer,
  detail: detailReducer,
});

const persist = persistReducer(persistConfig, rootReducers);

const store = () =>
  configureStore({
    reducer: persist,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

export const wrapper = createWrapper(store);
