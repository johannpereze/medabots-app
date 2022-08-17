import { onAuthStateChanged } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { AppDispatch } from "../app/store";
import { FirebaseAuth } from "../firebase/config";
import { serializeValue } from "../helpers/serializeValue";
import { login, logout } from "./authSlice";

export const getCurrentUser = async (
  dispatch: AppDispatch,
  setCheckingAuth: Dispatch<SetStateAction<boolean>>
) => {
  try {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      console.log("Serialized", JSON.parse(JSON.stringify(user)));
      if (!user) return dispatch(logout({ errorMessage: null }));
      if (!user.emailVerified)
        return dispatch(
          login({
            user: serializeValue(user),
            errorMessage: "email_not_verified",
            status: "not_authenticated",
          })
        );
      return dispatch(
        login({
          user: serializeValue(user),
          errorMessage: null,
          status: "authenticated",
        })
      );
    });
    setCheckingAuth(false);
  } catch (e) {
    setCheckingAuth(false);
  }
};
