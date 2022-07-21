import { Auth } from "aws-amplify";
import { TFunction } from "react-i18next";
import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "../app/store";
import errorHandler, { EnqueueSnackbar } from "../hooks/errorHandler";
import { setConfirEmail } from "./authSlice";

export interface ConfirmCode {
  confirmCode: string;
}

const confirmSignUp = async (
  { confirmCode }: ConfirmCode,
  userEmail: string,
  navigate: NavigateFunction,
  enqueueSnackbar: EnqueueSnackbar,
  t: TFunction<"translation", undefined>,
  dispatch: AppDispatch
) => {
  try {
    await Auth.confirmSignUp(userEmail, confirmCode);
    dispatch(setConfirEmail(userEmail));
    navigate("/");
  } catch (error) {
    errorHandler(error, enqueueSnackbar, t);
  }
};

export default confirmSignUp;
