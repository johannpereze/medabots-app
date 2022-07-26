import { TFunction } from "react-i18next";
import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "../app/store";
import errorHandler, { EnqueueSnackbar } from "../hooks/errorHandler";
import { LoginValues } from "./signIn";
import { startCreatingUserWithEmail } from "./thunks";

export interface UserAttributes extends LoginValues {
  givenName: string;
  familyName: string;
}

const signUp = async (
  { email, password, givenName, familyName }: UserAttributes,
  dispatch: AppDispatch,
  navigate: NavigateFunction,
  enqueueSnackbar: EnqueueSnackbar,
  t: TFunction<"translation", undefined>
) => {
  try {
    await dispatch(
      startCreatingUserWithEmail({
        email,
        password,
        // TODO: change given name to displayName
        displayName: givenName,
      })
    );
    navigate(`/login?email=${encodeURIComponent(email)}`);
  } catch (error) {
    errorHandler(error, enqueueSnackbar, t);
  }
};

export default signUp;
