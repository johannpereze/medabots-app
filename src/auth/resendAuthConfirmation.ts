import { Auth } from "aws-amplify";
import { TFunction } from "react-i18next";
import errorHandler, { EnqueueSnackbar } from "../hooks/errorHandler";
import { LoginValues } from "./signIn";

export interface UserAttributes extends LoginValues {
  given_name: string;
  family_name: string;
}

const resendAuthConfirmation = async (
  username: string,
  enqueueSnackbar: EnqueueSnackbar,
  t: TFunction<"translation", undefined>
) => {
  try {
    await Auth.resendSignUp(username);
  } catch (error) {
    errorHandler(error, enqueueSnackbar, t);
  }
};

export default resendAuthConfirmation;
