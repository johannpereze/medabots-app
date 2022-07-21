import { Backdrop as MuiBackdrop, CircularProgress } from "@mui/material";

export default function Backdrop() {
  return (
    <MuiBackdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="primary" />
    </MuiBackdrop>
  );
}
