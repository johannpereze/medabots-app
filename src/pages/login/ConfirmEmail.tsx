import { Paper, Typography } from "@mui/material";
import { applyActionCode } from "firebase/auth";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { FirebaseAuth } from "../../firebase/config";

export default function ConfirmEmail() {
  const [t] = useTranslation();
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");

  const verifyEmail = async (verifCode: string) => {
    await applyActionCode(FirebaseAuth, verifCode);
    // TODO: Navigate
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
