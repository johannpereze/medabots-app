import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SignUpInfo } from "../../auth/authSlice";
import PasswordField from "../../components/passwordField/PasswordField";

interface SignUpValuesForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}

interface RegisterFormProps {
  submit: ({ email, password, displayName }: SignUpInfo) => Promise<void>;
}

export default function RegisterForm({ submit }: RegisterFormProps) {
  const [termsChecked, setTermsChecked] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(3, t("error.first_name_should_be_of_minimum_3_characters_long"))
      .max(20, t("error.first_name_should_be_of_maximum_20_characters_long"))
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
      )
      .required(t("errors.login.first_name_is_required")),
    lastName: yup
      .string()
      .min(3, t("error.last_name_should_be_of_minimum_3_characters_long"))
      .max(20, t("error.last_name_should_be_of_maximum_20_characters_long"))
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
      )
      .required(),
    email: yup
      .string()
      .email(t("errors.login.enter_a_valid_email"))
      .required(t("errors.login.email_is_required")),
    password: yup
      .string()
      .min(8, t("errors.login.password_should_be_of_minimum_8_characters_long"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?\-"!@#%&/,><':;|_~`])\S{8,99}$/,
        t("errors.login.please_make_sure_your_passwor_validation_schema")
      )
      .required(t("errors.login.password_is_required")),
    password2: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        t("errors.login.your_passwords_do_not_match")
      )
      .required(t("errors.login.password_is_required")),
  });

  const initialValues: SignUpValuesForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async ({ email, password, firstName, lastName }) => {
      await submit({
        email,
        password,
        displayName: `${firstName} ${lastName}`,
      });
      navigate(`/login?email=${encodeURIComponent(email)}`);
    },
    validateOnBlur: true,
    validateOnMount: true,
  });

  /*   const signUp = async (
    { email, password, firstName, lastName }: UserAttributes,
    dispatch: AppDispatch,
    navigate: NavigateFunction,
    enqueueSnackbar: EnqueueSnackbar,
    t: TFunction<"translation", undefined>
  ) => {
    try {
      await dispatch(
        startCreatingUserWithEmail({
          email,
          password,
          // TODO: change given name to displayName
          displayName: firstName,
        })
      );
      navigate(`/login?email=${encodeURIComponent(email)}`);
    } catch (error) {
      errorHandler(error, enqueueSnackbar, t);
    }
  };
  
  export default signUp; */

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}
    >
      <Box sx={{ mt: 2, mb: 0 }}>
        <TextField
          fullWidth
          name="firstName"
          label={t("login.first_name")}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      </Box>
      <Box sx={{ mt: 2, mb: 0 }}>
        <TextField
          fullWidth
          name="lastName"
          label={t("login.last_name")}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </Box>
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
      <Box sx={{ mt: 2, mb: 0 }}>
        <PasswordField
          fullWidth
          name="password2"
          label={t("login.repeat_password")}
          value={formik.values.password2}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password2 && Boolean(formik.errors.password2)}
          helperText={formik.touched.password2 && formik.errors.password2}
        />
      </Box>

      <FormControlLabel
        sx={{ my: 1, alignSelf: "center" }}
        control={
          <Checkbox
            checked={termsChecked}
            onChange={() => setTermsChecked(!termsChecked)}
          />
        }
        label={
          <Typography variant="body2" sx={{ mt: 0.3 }}>
            {t("login.i_accept")}{" "}
            <Link component={NavLink} to="/privacy-policy">
              {t("general.terms_and_conditions")}
            </Link>
          </Typography>
        }
      />
      <Button
        fullWidth
        variant="contained"
        type="submit"
        disabled={!formik.isValid || formik.isSubmitting || !termsChecked}
        sx={{ mb: 3, mt: 1 }}
      >
        {t("login.create_account")}
      </Button>
    </Box>
  );
}
