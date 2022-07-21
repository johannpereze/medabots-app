import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user_id: string;
  email: string;
  family_name: string;
  given_name: string;
  confirmed_email?: string;
}

const initialState: AuthState = {
  user_id: "",
  email: "",
  family_name: "",
  given_name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => ({
      ...state,
      ...action.payload,
    }),
    deleteUser: () => initialState,
    setConfirEmail: (state, action: PayloadAction<string>) => ({
      ...state,
      confirmed_email: action.payload,
    }),
  },
});

export const { setUser, deleteUser, setConfirEmail } = authSlice.actions;

export default authSlice.reducer;
