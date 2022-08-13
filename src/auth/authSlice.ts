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

// interface AuthValues {
//   uid?: string | null;
//   displayName?: string | null;
//   photoURL?: string | null;
//   email?: string | null;
// }

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
  async ({ email, password, displayName }: signUpInfo, { rejectWithValue }) => {
    const { ok, errorMessage, uid, photoURL } = await registerWithEmail({
      email,
      password,
      displayName,
    });
    if (!ok)
      return rejectWithValue({ errorMessage: errorMessage || "Unknown error" });
    return {
      email,
      displayName,
      uid: uid || null,
      photoURL: photoURL || null,
      verified: false,
      errorMessage: errorMessage || null,
      status: "not_authenticated",
    };
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
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
    verifyUser: (state) => {
      state.verified = !!state.uid;
    },
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
      .addCase(startCreatingUserWithEmail.fulfilled, (state, { payload }) => {
        if (typeof payload === "boolean") return;
        return payload;
      })
      .addCase(startCreatingUserWithEmail.rejected, (state, { payload }) => {
        state.errorMessage = payload?.errorMessage || "Unknown error";
      });
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
