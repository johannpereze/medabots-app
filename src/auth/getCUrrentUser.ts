import { onAuthStateChanged } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { AppDispatch } from "../app/store";
import { FirebaseAuth } from "../firebase/config";
import { login, logout, softLogout } from "./authSlice";

export const getCurrentUser = async (
  dispatch: AppDispatch,
  setCheckingAuth: Dispatch<SetStateAction<boolean>>,
  isEmailVerified: boolean
) => {
  try {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      console.log("user", user);
      // TODO: verificar todos los logout para ver si tienen un correcto error message
      if (!user) return dispatch(logout({ errorMessage: null }));
      // if (!user.emailVerified) return dispatch(login(user));
      if (!isEmailVerified) return dispatch(softLogout(user));
      console.log("login in getCurrentUser");
      dispatch(login(user));
    });
    setCheckingAuth(false);
  } catch (e) {
    setCheckingAuth(false);
  }
};
