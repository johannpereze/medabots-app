import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  User,
} from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { serializeValue } from "../helpers/serializeValue";

export interface AuthState {
  user: User | null;
  status: "checking" | "not_authenticated" | "authenticated";
  errorMessage: string | null;
}

export const authInitialState: AuthState = {
  user: null,
  status: "not_authenticated",
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

export const startCreatingUserWithEmail = createAsyncThunk<
  AuthState,
  SignUpInfo
>(
  "auth/startCreatingUserWithEmail",
  async ({ email, password, displayName }: SignUpInfo) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );

      await updateProfile(user, { displayName });
      await sendEmailVerification(user);

      return {
        user: serializeValue(user),
        errorMessage: "go_to_your_email_inbox_and_click_the_confirmation_link",
        status: "not_authenticated",
      };
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
);

export const startLoginWithEmail = createAsyncThunk<AuthState, SignInInfo>(
  "auth/startLoginWithEmail",
  async ({ email, password }) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );

      return {
        user: serializeValue(user),
        errorMessage: user.emailVerified ? null : "email_not_verified",
        status: user.emailVerified ? "authenticated" : "not_authenticated",
      };
    } catch (e) {
      return { ...authInitialState, errorMessage: `${e}` };
    }
  }
);

export const startGoogleSignIn = createAsyncThunk<AuthState>(
  "auth/startGoogleSignIn",
  async () => {
    try {
      const { user } = await signInWithPopup(
        FirebaseAuth,
        new GoogleAuthProvider()
      );
      return {
        user: serializeValue(user),
        errorMessage: null,
        status: "authenticated",
      };
    } catch (e) {
      return {
        ...authInitialState,
        errorMessage: `${e}`,
      };
    }
  }
);

export const startLogout = createAsyncThunk("auth/startLogout", async () => {
  await FirebaseAuth.signOut();
});

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login: (state, { payload }: PayloadAction<AuthState>) => payload,
    logout: (
      state,
      { payload }: PayloadAction<{ errorMessage: string | null }>
    ) => ({
      ...authInitialState,
      errorMessage: payload.errorMessage,
    }),
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
      .addCase(startCreatingUserWithEmail.rejected, (state, { error }) => {
        console.log("startCreatingUserWithEmail.rejected payload", error);
        return {
          ...authInitialState,
          errorMessage: error.message || "unknown_error",
        };
      })
      .addCase(startLoginWithEmail.pending, (state) => {
        state.status = "checking";
      })
      .addCase(startLoginWithEmail.fulfilled, (state, { payload }) => payload)
      .addCase(startLoginWithEmail.rejected, (state, { error }) => ({
        ...authInitialState,
        errorMessage: error.message || "unknown_error",
      }))
      .addCase(startGoogleSignIn.pending, (state) => {
        state.status = "checking";
      })
      .addCase(startGoogleSignIn.fulfilled, (state, { payload }) => payload)
      .addCase(startGoogleSignIn.rejected, (state, { error }) => ({
        ...authInitialState,
        errorMessage: error.message || "unknown_error",
      }))
      .addCase(startLogout.pending, (state) => {
        state.status = "checking";
      })
      .addCase(startLogout.fulfilled, () => authInitialState)
      .addCase(startLogout.rejected, () => ({
        ...authInitialState,
        errorMessage: "unknown_error",
      }));
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
