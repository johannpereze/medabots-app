import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  User,
} from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import {
  logoutFirebase,
  signInWithEmail,
  signInWithGoole,
} from "../firebase/providers";

export interface AuthState {
  user: User | null;
  status: "checking" | "not_authenticated" | "authenticated";
  errorMessage: string | null | "email_not_verified";
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

interface RejectValue {
  rejectValue: { errorMessage: string };
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
        user,
        errorMessage: "go_to_your_email_inbox_and_click_the_confirmation_link",
        status: "not_authenticated",
      };
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
);

export const startLoginWithEmail = createAsyncThunk<
  AuthState,
  SignInInfo,
  RejectValue
>("auth/startLoginWithEmail", async (signInInfo, { rejectWithValue }) => {
  const authState = await signInWithEmail(signInInfo);
  if (!authState.user)
    return rejectWithValue({
      errorMessage: authState.errorMessage || "unknown_error",
    });
  return authState;
});

export const startGoogleSignIn = createAsyncThunk<AuthState, void, RejectValue>(
  "auth/startGoogleSignIn",
  async (_, { rejectWithValue }) => {
    const authState = await signInWithGoole();
    if (!authState.user)
      return rejectWithValue({
        errorMessage: authState.errorMessage || "unknown_error",
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
      .addCase(startLoginWithEmail.rejected, (state, { payload }) => ({
        ...authInitialState,
        errorMessage: payload?.errorMessage || "unknown_error",
      }))
      .addCase(startGoogleSignIn.pending, (state) => {
        state.status = "checking";
      })
      .addCase(startGoogleSignIn.fulfilled, (state, { payload }) => payload)
      .addCase(startGoogleSignIn.rejected, (state, { payload }) => ({
        ...authInitialState,
        errorMessage: payload?.errorMessage || "unknown_error",
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
