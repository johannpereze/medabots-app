import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface AuthState {
  status: "checking" | "not_authenticated" | "authenticated";
  uid: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: string | null;
  unverifiedUser?: User;
}

const initialState: AuthState = {
  status: "not_authenticated",
  uid: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => ({
      ...initialState,
      errorMessage: payload.errorMessage,
    }),
    checkingCredentials: (state) => ({
      ...state,
      status: "checking",
    }),
    setUnverifiedUser: (state, { payload }) => {
      state.unverifiedUser = payload.user;
    },
  },
});

export const { login, logout, checkingCredentials, setUnverifiedUser } =
  authSlice.actions;

export default authSlice.reducer;
