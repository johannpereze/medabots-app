import { Paper, Typography } from "@mui/material";
import { applyActionCode } from "firebase/auth";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../auth/authSlice";
import { FirebaseAuth } from "../../firebase/config";
import errorHandler from "../../helpers/errorHandler";

export default function ConfirmEmail() {
  const [t] = useTranslation();
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const verifyEmail = async (verifCode: string) => {
    try {
      await applyActionCode(FirebaseAuth, verifCode);
      dispatch(login({ user, status: "authenticated", errorMessage: null }));
      navigate("/");
    } catch (e) {
      errorHandler(e, enqueueSnackbar, t);
    }
  };

  useEffect(() => {
    if (oobCode) {
      verifyEmail(oobCode);
    }
  }, []);

  return (
    <Paper>
      <Typography>{t("auth.confirm-email")}</Typography>
    </Paper>
  );
}
