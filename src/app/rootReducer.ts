import { combineReducers } from "@reduxjs/toolkit";
// Change Slice to Reducer because the export is fooSlice.reducer
import authReducer from "../auth/authSlice";
import counterReducer from "../components/counter/counterSlice";
import headerReducer from "../components/header/headerSlice";
import themeManagerReducer from "../components/managers/themeManager/themeManagerSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  header: headerReducer,
  themeManager: themeManagerReducer,
});

export default rootReducer;
