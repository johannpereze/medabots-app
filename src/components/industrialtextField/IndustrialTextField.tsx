import { SxProps, TextField, Theme } from "@mui/material";

// TODO: try to export the same component but styled in order to have all the same props
interface IndustrialPaperProps {
  fullWidth?: boolean;
  name?: string;
  label?: string;
  value?: any;
  onChange?: any;
  onBlur?: any;
  error?: any;
  helperText?: any;
  sx?: SxProps<Theme> | undefined;
}
// https://firebasestorage.googleapis.com/v0/b/medabotsapp.appspot.com/o/textbox-border.png?alt=media&token=0895ec1f-b6bd-4f5f-8c53-9b8a82f3ad4b
export default function IndustrialTextField({
  fullWidth,
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  sx,
}: IndustrialPaperProps) {
  return (
    <TextField
      fullWidth={fullWidth}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      variant="standard"
      sx={{
        border: "7.5px solid transparent",
        padding: "7.5px",
        borderImage:
          "url(https://firebasestorage.googleapis.com/v0/b/medabotsapp.appspot.com/o/textbox-border.png?alt=media&token=0895ec1f-b6bd-4f5f-8c53-9b8a82f3ad4b) 5 stretch",
        imageRendering: "pixelated",
        backgroundColor: "transparent",
        ...sx,
      }}
    />
  );
}

IndustrialTextField.defaultProps = {
  fullWidth: undefined,
  name: undefined,
  label: undefined,
  value: undefined,
  onChange: undefined,
  onBlur: undefined,
  error: undefined,
  helperText: undefined,
};
