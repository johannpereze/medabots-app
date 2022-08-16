import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import {
  logoutFirebase,
  registerWithEmail,
  signInWithEmail,
  signInWithGoole,
} from "../firebase/providers";

export interface AuthState {
  status: "checking" | "not_authenticated" | "authenticated";
  uid: string | null;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  emailVerified: boolean;
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
  emailVerified: false,
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

export const startGoogleSignIn = createAsyncThunk<AuthState, any, RejectValue>(
  "auth/startGoogleSignIn",
  async (_, { rejectWithValue }) => {
    const authState = await signInWithGoole();
    if (!authState.uid)
      return rejectWithValue({
        errorMessage: authState.errorMessage || "Unknown error",
      });
    return authState;
  }
);

export const startLogout = createAsyncThunk("auth/startLogout", async () => {
  await logoutFirebase();
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
      state.emailVerified = payload.emailVerified;
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
      state.emailVerified = payload.emailVerified;
    },
    checkingCredentials: (state) => ({
      ...state,
      status: "checking",
    }),
    verifyUser: (state) => ({
      ...state,
      emailVerified: !!state.uid,
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
      }))
      .addCase(startGoogleSignIn.pending, (state) => {
        state.status = "checking";
      })
      .addCase(startGoogleSignIn.fulfilled, (state, { payload }) => payload)
      .addCase(startGoogleSignIn.rejected, (state, { payload }) => ({
        ...authInitialState,
        errorMessage: payload?.errorMessage || "Unknown error",
      }))
      .addCase(startLogout.pending, (state) => {
        state.status = "checking";
      })
      .addCase(startLogout.fulfilled, () => authInitialState)
      .addCase(startLogout.rejected, () => ({
        ...authInitialState,
        errorMessage: "Unknown error",
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
