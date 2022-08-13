import { AppDispatch } from "../app/store";
import {
  logoutFirebase,
  signInWithEmail,
  signInWithGoole,
} from "../firebase/providers";
import {
  checkingCredentials,
  login,
  logout,
  setUnverifiedUser,
} from "./authSlice";
import { SetSubmitting } from "./types";

// TODO Refactor this with create async thunk
export const checkingAuthentication = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSign = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoole();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

// TODO: any
// export const startCreatingUserWithEmail = ({
//   email,
//   password,
//   displayName,
// }: any) => {
//   return async (dispatch: AppDispatch) => {
//     dispatch(checkingCredentials());

//     const { ok, uid, photoURL, errorMessage } = await registerWithEmail({
//       email,
//       password,
//       displayName,
//     });
//     if (!ok) return dispatch(logout({ errorMessage }));
//     return { uid, photoURL, displayName, email };
//     // dispatch(login({ uid, photoURL, displayName, email })); TODO: I dont think I need this
//   };
// };

export const startLoginWithEmail = (
  {
    email,
    password,
  }: // TODO: any
  any,
  setSubmitting: SetSubmitting
) => {
  console.log("se ejecuta startLoginWithEmail", email, password);
  return async (dispatch: AppDispatch) => {
    console.log("Justo antes de ejecutar el checkingCredentials");
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage, emailVerified, user } =
      await signInWithEmail({
        email,
        password,
      });
    if (!ok) {
      setSubmitting(false);
      return dispatch(logout({ errorMessage }));
    }
    if (!emailVerified) {
      // TODO: make sure unverified users are not logged to the app in any way (the private routes are protected)
      dispatch(logout({ errorMessage: "email_not_verified" }));
      dispatch(setUnverifiedUser({ user }));
      return;
    }
    console.log({ uid, photoURL, email });
    dispatch(login({ uid, photoURL, email }));
  };
};

export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await logoutFirebase();
      dispatch(logout({}));
    } catch (e) {
      return dispatch(logout({ errorMessage: e }));
    }
  };
};
