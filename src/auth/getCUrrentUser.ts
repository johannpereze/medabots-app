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
      if (!user) return dispatch(logout({ errorMessage: null }));

      const { displayName, email, emailVerified, photoURL, uid } = user;

      if (!user.emailVerified)
        return dispatch(
          // TODO: I should not use this long ObjectSchema. Just use {user, errorMessage and status }
          softLogout({
            displayName,
            email,
            errorMessage: null,
            photoURL,
            status: "authenticated",
            uid,
            emailVerified,
          })
        );
      return dispatch(
        login({
          displayName,
          email,
          errorMessage: null,
          photoURL,
          status: "authenticated",
          uid,
          emailVerified,
        })
      );
    });
    setCheckingAuth(false);
  } catch (e) {
    setCheckingAuth(false);
  }
};
