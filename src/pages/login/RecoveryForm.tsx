import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import IndustrialBox from "../../components/industrialBox/IndustrialBox";
import PixelIcon from "../../components/pixelIcon/PixelIcon";

export default function RecoveryForm() {
  const [t] = useTranslation();
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
      <Alert
        sx={{ mt: 2, borderRadius: 0 }}
        severity="info"
        icon={<PixelIcon name="info-box" />}
      >
        {t("login.password_recovery")}
      </Alert>
      <IndustrialBox
        sx={{
          p: 2,
          mt: 2,
        }}
      >
        <Typography variant="body2">
          {t("login.instructions_will_be_sent")}
        </Typography>
      </IndustrialBox>
      <Box sx={{ mt: 3, mb: 0 }}>
        <TextField
          fullWidth
          name="email"
          variant="filled"
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
