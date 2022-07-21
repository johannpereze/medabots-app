import { Auth } from "aws-amplify";
import { TFunction } from "react-i18next";
import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "../app/store";
import errorHandler, { EnqueueSnackbar } from "../hooks/errorHandler";
import { deleteUser } from "./authSlice";

const logout = async (
  dispatch: AppDispatch,
  navigate: NavigateFunction,
  enqueueSnackbar: EnqueueSnackbar,
  t: TFunction<"translation", undefined>
) => {
  try {
    await Auth.signOut();
    dispatch(deleteUser());
    navigate("/login");
  } catch (error) {
    errorHandler(error, enqueueSnackbar, t);
  }
};

export default logout;
