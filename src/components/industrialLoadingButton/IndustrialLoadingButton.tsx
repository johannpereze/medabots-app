import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { styled, Typography } from "@mui/material";

export default function IndustrialLoadingButton(props: LoadingButtonProps) {
  const MUIButton = styled(LoadingButton)<LoadingButtonProps>(({ theme }) => ({
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
    borderRadius: "0px",
    borderTop: `3px solid ${theme.palette.primary.light}`,
    boxShadow: "none",
    color: "white",
    filter: theme.filters.dropShadow,
    height: "33px",
    position: "relative",
    "&::before": {
      content: '""',
      height: "28px",
      width: "2px",
      backgroundColor: theme.palette.primary.light,
      position: "absolute",
      left: "-2px",
    },
    "&::after": {
      content: '""',
      height: "28px",
      width: "3px",
      backgroundColor: theme.palette.primary.dark,
      position: "absolute",
      right: "-3px",
    },
    "&:hover": {
      filter: `${theme.filters.brightnessHover}`,
      backgroundColor: theme.palette.primary.main,
      boxShadow: "none",
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.primary.main,
      filter: `${theme.filters.brightnessDisabled} ${theme.filters.dropShadow}`,
    },
  }));
  return (
    <MUIButton {...props}>
      <Typography sx={{ pb: 0.5 }}>{props.children}</Typography>
    </MUIButton>
  );
}
