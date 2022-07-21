import { LoadingButton } from "@mui/lab";
import { Box, Link, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { useAppSelector } from "../../app/hooks";
import { LoginValues, SetSubmitting } from "../../auth/signIn";
import PasswordField from "../../components/passwordField/PasswordField";

interface LoginFormProps {
  submit: (
    { email, password }: LoginValues,
    setSubmitting: SetSubmitting
  ) => void;
}
export default function LoginForm({ submit }: LoginFormProps) {
  const { t } = useTranslation();
  const confirmedEmil = useAppSelector((state) => state.auth.confirmed_email);
  const validationSchema = yup.object({
    email: yup.string().email().required(t("errors.login.email_is_required")),
    password: yup
      .string()
      .min(8, t("errors.login.password_should_be_of_minimum_8_characters_long"))
      .required(t("errors.login.password_is_required")),
  });

  const formik = useFormik({
    initialValues: {
      email: confirmedEmil || "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      submit(values, setSubmitting);
    },
    validateOnBlur: true,
    validateOnMount: true,
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Box sx={{ mt: 2, mb: 0 }}>
        <TextField
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
      <Box sx={{ mt: 2, mb: 0 }}>
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
      <LoadingButton
        fullWidth
        variant="contained"
        type="submit"
        disabled={formik.isSubmitting || !formik.isValid}
        sx={{ mt: 3 }}
        loading={formik.isSubmitting}
      >
        {t("login.log_in")}
      </LoadingButton>
      <Typography
        sx={{ display: "flex", justifyContent: "end", mt: 2, mb: 1 }}
        variant="body2"
      >
        <Link component={NavLink} to="/login/password-recovery">
          {t("login.forgot_password")}
        </Link>
      </Typography>
    </Box>
  );
}
