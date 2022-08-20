import { Grow } from "@mui/material";
import { OptionsObject, SnackbarKey, SnackbarMessage } from "notistack";
import { TFunction } from "react-i18next";

export type EnqueueSnackbar = (
  message: SnackbarMessage,
  options?: OptionsObject | undefined
) => SnackbarKey;

export default function errorHandler(
  error: any,
  enqueueSnackbar: EnqueueSnackbar,
  t: TFunction<"translation", undefined>
) {
  let { message } = error;
  // let message: string = t("general.an_error_have_ocurred"); TODO: Use this one for production
  const key: string = error.message;
  switch (key) {
    case "Incorrect username or password.":
      message = t("login.incorrect_username_or_password");
      break;
    case "An account with the given email already exists.":
      message = t("login.an_account_with_the_given_email_already_exists");
      break;
    case "Attempt limit exceeded, please try after some time.":
      message = t("login.an_account_with_the_given_email_already_exists");
      break;

    default:
      break;
  }
  return enqueueSnackbar(message, {
    variant: "error",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    TransitionComponent: Grow,
  });
}
