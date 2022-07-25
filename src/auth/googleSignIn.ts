import { AppDispatch } from "../app/store";
import { startGoogleSign } from "./thunks";

export const googleSignIn = (dispatch: AppDispatch) => {
  dispatch(startGoogleSign());
};
