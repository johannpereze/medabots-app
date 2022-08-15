import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { registerWithEmail, signInWithEmail } from "../firebase/providers";

export interface AuthState {
  status: "checking" | "not_authenticated" | "authenticated";
  uid: string | null;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  // TODO: change verified to emailVerified as defined by firebase
  verified: boolean;
  errorMessage: string | null;
  // TODO: I'm i using this?
  unverifiedUser?: User;
}

export const authInitialState: AuthState = {
  status: "not_authenticated",
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
  verified: false,
  errorMessage: null,
};

export interface SignUpInfo {
  email: string;
  password: string;
  displayName: string;
}
export interface SignInInfo {
  email: string;
  password: string;
}

interface RejectValue {
  rejectValue: { errorMessage: string };
}

export const startCreatingUserWithEmail = createAsyncThunk<
  AuthState,
  SignUpInfo,
  RejectValue
>(
  "auth/startCreatingUserWithEmail",
  async (signUpInfo, { rejectWithValue }) => {
    const authState = await registerWithEmail(signUpInfo);
    if (!authState.uid)
      return rejectWithValue({
        errorMessage: authState.errorMessage || "Unknown error",
      });
    return authState;
  }
);

export const startLoginWithEmail = createAsyncThunk<
  AuthState,
  SignInInfo,
  RejectValue
>("auth/startLoginWithEmail", async (signInInfo, { rejectWithValue }) => {
  const authState = await signInWithEmail(signInInfo);
  if (!authState.uid)
    return rejectWithValue({
      errorMessage: authState.errorMessage || "Unknown error",
    });
  return authState;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  // TODO:  make this state updates shroter. Too many lines
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
      ...authInitialState,
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
        ...authInitialState,
        errorMessage: payload?.errorMessage || "Unknown error",
      }))
      .addCase(startLoginWithEmail.pending, (state) => {
        state.status = "checking";
      })
      .addCase(startLoginWithEmail.fulfilled, (state, { payload }) => payload)
      .addCase(startLoginWithEmail.rejected, (state, { payload }) => ({
        ...authInitialState,
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
