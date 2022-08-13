import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { registerWithEmail } from "../firebase/providers";

export interface AuthState {
  status: "checking" | "not_authenticated" | "authenticated";
  uid: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: string | null;
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
  photoURL: null,
  errorMessage: null,
};

export interface signUpInfo {
  email: string;
  password: string;
  displayName: string;
}

export const startCreatingUserWithEmail = createAsyncThunk<
  void,
  signUpInfo,
  { rejectValue: { errorMessage: string } }
>(
  "auth/startCreatingUserWithEmail",
  async ({ email, password, displayName }: signUpInfo, { rejectWithValue }) => {
    const { ok, errorMessage } = await registerWithEmail({
      email,
      password,
      displayName,
    });
    if (!ok)
      return rejectWithValue({ errorMessage: errorMessage || "Unknown error" });
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
  extraReducers: (builder) => {
    builder
      .addCase(startCreatingUserWithEmail.pending, (state) => {
        state.status = "checking";
      })
      .addCase(startCreatingUserWithEmail.fulfilled, (state, { payload }) => {
        if (typeof payload === "boolean") return;
        state.status = "not_authenticated";
        state.errorMessage = null;
      })
      .addCase(startCreatingUserWithEmail.rejected, (state, { payload }) => {
        state.errorMessage = payload?.errorMessage || "Unknown error";
      });
  },
});

export const { login, logout, checkingCredentials, setUnverifiedUser } =
  authSlice.actions;

export default authSlice.reducer;
