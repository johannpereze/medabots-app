import { Google } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SignInInfo, startGoogleSignIn } from "../../auth/authSlice";
import PasswordField from "../../components/passwordField/PasswordField";

interface LoginFormProps {
  submit: ({ email, password }: SignInInfo) => void;
}
export default function LoginForm({ submit }: LoginFormProps) {
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { status } = useAppSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const validationSchema = yup.object({
    email: yup.string().email().required(t("errors.login.email_is_required")),
    password: yup
      .string()
      .min(8, t("errors.login.password_should_be_of_minimum_8_characters_long"))
      .required(t("errors.login.password_is_required")),
  });

  const formik = useFormik({
    initialValues: {
      email: searchParams.get("email") || "testmailjohann@gmail.com",
      password: "TestPass1*",
    },
    validationSchema,
    onSubmit: (values) => {
      submit(values);
    },
    validateOnBlur: true,
    validateOnMount: true,
  });

  return (
    <Box sx={{ px: 1, py: 4 }} component="form" onSubmit={formik.handleSubmit}>
      <Box>
        <TextField
          variant="filled"
          fullWidth
          name="email"
          label={t("login.email")}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <PasswordField
          fullWidth
          name="password"
          label={t("login.password")}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Box>
      <Typography
        sx={{ display: "flex", justifyContent: "end", mt: 2, mb: 2 }}
        variant="body2"
      >
        <Link component={NavLink} to="/login/password-recovery">
          {t("login.forgot_password")}
        </Link>
      </Typography>
      <LoadingButton
        fullWidth
        type="submit"
        disabled={!formik.isValid || isAuthenticating}
        sx={{ mt: 1 }}
        loading={isAuthenticating}
        variant="contained"
      >
        {t("login.log_in")}
      </LoadingButton>

      <Button
        fullWidth
        startIcon={<Google />}
        disabled={isAuthenticating}
        onClick={() => dispatch(startGoogleSignIn())}
        sx={{
          mt: 2,
        }}
        variant="contained"
        color="secondary"
      >
        {t("login.google_log_in")}
      </Button>
    </Box>
  );
}
