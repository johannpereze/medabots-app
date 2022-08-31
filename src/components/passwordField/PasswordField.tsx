import {
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { ChangeEventHandler, FocusEvent, MouseEvent, useState } from "react";
import PixelIcon from "../pixelIcon/PixelIcon";

interface TextFieldProps {
  name: string;
  label?: string | null;
  value: string | number | null;
  onChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onBlur: {
    (e: FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  error: boolean | undefined;
  helperText: string | false | undefined;
  fullWidth?: boolean;
  extraProps?: any;
}

export default function PasswordField({
  name,
  label,
  value,
  onChange,
  error,
  helperText,
  fullWidth,
  extraProps,
  onBlur,
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth={fullWidth} variant="outlined">
      <InputLabel variant="filled" error={error} htmlFor={name}>
        {label}
      </InputLabel>

      <FilledInput
        /* sx={{
          border: "7.5px solid transparent",
          padding: "7.5px",
          borderImage:
            "url(https://firebasestorage.googleapis.com/v0/b/medabotsapp.appspot.com/o/textbox-border.png?alt=media&token=0895ec1f-b6bd-4f5f-8c53-9b8a82f3ad4b) 5 stretch",
          imageRendering: "pixelated",
          backgroundColor: "transparent",
        }} */
        fullWidth
        id={name}
        type={showPassword ? "text" : "password"}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                borderRadius: "50%",
              }}
            >
              {showPassword ? (
                <PixelIcon name="eye-closed" />
              ) : (
                <PixelIcon name="eye" />
              )}
            </IconButton>
          </InputAdornment>
        }
        {...extraProps}
      />
      {error && (
        <FormHelperText variant="filled" error>
          <>{helperText}</>
        </FormHelperText>
      )}
    </FormControl>
  );
}

PasswordField.defaultProps = {
  fullWidth: false,
  label: null,
};
