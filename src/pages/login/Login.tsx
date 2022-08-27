import { Alert, Box, Button, Grid, Link, Typography } from "@mui/material";
import { sendEmailVerification } from "firebase/auth";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  SignInInfo,
  SignUpInfo,
  startCreatingUserWithEmail,
  startLoginWithEmail,
} from "../../auth/authSlice";
import IndustrialBox from "../../components/industrialBox/IndustrialBox";
import IndustrialContainer from "../../components/industrialContainer/IndustrialContainer";
import LanguageSelector from "../../components/languageSelector/LanguageSelector";
import ThemeSelector from "../../components/themeSelector/ThemeSelector";
import errorHandler from "../../helpers/errorHandler";
import LoginForm from "./LoginForm";
import RecoveryForm from "./RecoveryForm";
import RegisterForm from "./RegisterForm";

interface LoginProps {
  step: "login" | "register" | "passwordRecovery" | "confirmationCode";
}

export default function Login({ step }: LoginProps) {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  // TODO: change display name
  const { user, errorMessage } = useAppSelector((state) => state.auth);

  // TODO: Change signup to register and organize the terminology
  /*   const signUpSubmit = async ({
    email,
    password,
    givenName,
    familyName,
  }: UserAttributes) => {
    signUp(
      {
        email,
        password,
        givenName,
        familyName,
      },
      dispatch,
      navigate,
      enqueueSnackbar,
      t
    );
  }; */

  const signUpSubmit = async ({ email, password, displayName }: SignUpInfo) => {
    try {
      await dispatch(
        startCreatingUserWithEmail({
          email,
          password,
          displayName,
        })
      );
      navigate(`/login?email=${encodeURIComponent(email)}`);
    } catch (e) {
      errorHandler(e, enqueueSnackbar, t);
    }
  };

  const handleResend = async () => {
    user && sendEmailVerification(user);
  };

  const signInSubmit = ({ email, password }: SignInInfo) => {
    // TODO: not handling isSubmitting
    dispatch(startLoginWithEmail({ email, password }));
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ mt: 8, mb: 4 }}>
          {t("general.login")}
        </Typography>
        <IndustrialContainer
          // elevation={4}
          sx={{
            maxWidth: "80%",
            width: 350,
            display: "flex",
            flexDirection: "column",
            px: 3,
            py: 1,
            my: 1,
          }}
        >
          {/* TODO: use this error for all errors */}
          {errorMessage && (
            <Alert severity="warning" sx={{ my: 2 }}>
              {t(`errors.${errorMessage}`)}
            </Alert>
          )}
          {step === "register" && <RegisterForm submit={signUpSubmit} />}
          {step === "passwordRecovery" && <RecoveryForm />}
          {step === "login" && <LoginForm submit={signInSubmit} />}
          {user && !user.emailVerified && (
            <Button onClick={handleResend}>
              {t("login.resend_confirmation_code")}
            </Button>
          )}
        </IndustrialContainer>
        <IndustrialBox
          sx={{
            maxWidth: "80%",
            width: 350,
            display: "flex",
            justifyContent: "center",
            p: 2,
            my: 1,
          }}
        >
          {/* TODO: delete all confirmation code references */}
          {(step === "register" || step === "confirmationCode") && (
            <Typography variant="body2">
              {t("login.already_registered")}{" "}
              <Link component={NavLink} to="/">
                {t("login.log_in")}
              </Link>
            </Typography>
          )}
          {step === "passwordRecovery" && (
            <Typography variant="body2">
              {t("login.go_back_to")}{" "}
              <Link component={NavLink} to="/">
                {t("general.login")}
              </Link>
            </Typography>
          )}
          {step === "login" && (
            <Typography variant="body2">
              {t("login.not_registered")}{" "}
              <Link component={NavLink} to="register">
                {t("login.create_an_account")}
              </Link>
            </Typography>
          )}
        </IndustrialBox>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: 350,
            maxWidth: "80%",
            mb: 10,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <LanguageSelector />
            </Grid>
            <Grid item xs={6}>
              <ThemeSelector />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
