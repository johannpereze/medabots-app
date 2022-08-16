import { combineReducers } from "@reduxjs/toolkit";
// Change Slice to Reducer because the export is fooSlice.reducer
import authReducer from "../auth/authSlice";
import headerReducer from "../components/header/headerSlice";
import themeManagerReducer from "../components/managers/themeManager/themeManagerSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
  themeManager: themeManagerReducer,
});

export default rootReducer;
