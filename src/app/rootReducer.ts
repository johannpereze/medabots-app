import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
// Change Slice to Reducer because the export is fooSlice.reducer
import { persistReducer } from "redux-persist";
import authReducer from "../auth/authSlice";
import headerReducer from "../components/header/headerSlice";
import themeManagerReducer from "../components/managers/themeManager/themeManagerSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["errorMessage"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  header: headerReducer,
  themeManager: themeManagerReducer,
});

export default persistReducer(persistConfig, rootReducer);
