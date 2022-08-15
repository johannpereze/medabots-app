import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { registerWithEmail } from "../firebase/providers";

export interface AuthState {
  status: "checking" | "not_authenticated" | "authenticated";
  uid: string | null;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  verified: boolean;
  errorMessage: string | null;
  // TODO: I'm i using this?
  unverifiedUser?: User;
}

const initialState: AuthState = {
  status: "not_authenticated",
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
  verified: false,
  errorMessage: null,
};

export interface signUpInfo {
  email: string;
  password: string;
  displayName: string;
}

export const startCreatingUserWithEmail = createAsyncThunk<
  AuthState,
  signUpInfo,
  { rejectValue: { errorMessage: string } }
>(
  "auth/startCreatingUserWithEmail",
  async ({ email, password, displayName }, { rejectWithValue }) => {
    const authState = await registerWithEmail({
      email,
      password,
      displayName,
    });
    if (!authState.uid)
      return rejectWithValue({
        errorMessage: authState.errorMessage || "Unknown error",
      });
    return authState;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // TODO:  make this state updates ShortTextRounded. Too many lines
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = payload.emailVerified ? null : "email_not_verified";
      state.verified = payload.emailVerified;
    },
    logout: (state, { payload }) => ({
      ...initialState,
      errorMessage: payload.errorMessage,
    }),
    softLogout: (state, { payload }) => {
      state.status = "not_authenticated";
      state.uid = payload.uid;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = payload.errorMessage;
      state.verified = payload.emailVerified;
    },
    checkingCredentials: (state) => ({
      ...state,
      status: "checking",
    }),
    verifyUser: (state) => ({
      ...state,
      verified: !!state.uid,
    }),
    // TODO: do i use this?
    setUnverifiedUser: (state, { payload }) => {
      state.unverifiedUser = payload.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startCreatingUserWithEmail.pending, (state) => {
        state.status = "checking";
      })
      .addCase(
        startCreatingUserWithEmail.fulfilled,
        (state, { payload }) => payload
      )
      .addCase(startCreatingUserWithEmail.rejected, (state, { payload }) => ({
        ...initialState,
        errorMessage: payload?.errorMessage || "Unknown error",
      }));
  },
});

export const {
  login,
  logout,
  softLogout,
  checkingCredentials,
  verifyUser,
  setUnverifiedUser,
} = authSlice.actions;

export default authSlice.reducer;
