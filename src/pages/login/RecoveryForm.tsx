import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export default function RecoveryForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .email(t("errors.login.enter_a_valid_email"))
      .required(t("errors.login.email_is_required")),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: () => {
      navigate("/");
    },
    validateOnBlur: true,
    validateOnMount: true,
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Alert sx={{ mt: 2 }} severity="info">
        {t("login.password_recovery")}
      </Alert>
      <Paper
        sx={{
          p: 2,
          mt: 2,
        }}
        variant="outlined"
      >
        <Typography variant="body2">
          {t("login.instructions_will_be_sent")}
        </Typography>
      </Paper>
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

      <Button
        fullWidth
        variant="contained"
        type="submit"
        disabled={formik.isSubmitting || !formik.isValid}
        sx={{ mt: 3, mb: 2 }}
      >
        {t("login.recover_password")}
      </Button>
    </Box>
  );
}
