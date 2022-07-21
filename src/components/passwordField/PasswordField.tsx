import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput as MuiOutlinedInput,
} from "@mui/material";
import { ChangeEventHandler, FocusEvent, MouseEvent, useState } from "react";

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
    <FormControl variant="outlined">
      <InputLabel error={error} htmlFor={name}>
        {label}
      </InputLabel>

      <MuiOutlinedInput
        fullWidth={fullWidth}
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
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        {...extraProps}
      />
      {error && (
        <FormHelperText error>
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
