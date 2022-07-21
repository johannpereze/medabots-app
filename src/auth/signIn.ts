import { Auth } from "aws-amplify";
import { TFunction } from "react-i18next";
import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "../app/store";
import errorHandler, { EnqueueSnackbar } from "../hooks/errorHandler";
import { setUser } from "./authSlice";

export interface LoginValues {
  email: string;
  password: string;
}

export type SetSubmitting = (isSubmitting: boolean) => void;

const signIn = async (
  { email, password }: LoginValues,
  dispatch: AppDispatch,
  navigate: NavigateFunction,
  enqueueSnackbar: EnqueueSnackbar,
  t: TFunction<"translation", undefined>,
  setSubmitting: SetSubmitting
) => {
  setSubmitting(true);
  try {
    const user = await Auth.signIn(email, password);
    const {
      email: _email,
      family_name: _familyName,
      given_name: _givenName,
      sub,
    } = user.attributes;
    dispatch(
      setUser({
        user_id: sub,
        email: _email,
        family_name: _familyName,
        given_name: _givenName,
      })
    );
    navigate("/", { replace: true });
    setSubmitting(false);
  } catch (error: any) {
    if (error.message === "User is not confirmed.") {
      dispatch(
        setUser({
          user_id: "",
          email,
          family_name: "",
          given_name: "",
        })
      );
      navigate("/login/confirmation-code");
    }
    errorHandler(error, enqueueSnackbar, t);
    setSubmitting(false);
  }
};

export default signIn;
