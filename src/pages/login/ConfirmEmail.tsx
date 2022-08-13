import { Paper, Typography } from "@mui/material";
import { applyActionCode } from "firebase/auth";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { verifyUser } from "../../auth/authSlice";
import { FirebaseAuth } from "../../firebase/config";
import errorHandler from "../../hooks/errorHandler";

export default function ConfirmEmail() {
  const [t] = useTranslation();
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const verifyEmail = async (verifCode: string) => {
    try {
      await applyActionCode(FirebaseAuth, verifCode);
      dispatch(verifyUser());
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
