import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { styled, Typography, useTheme } from "@mui/material";

export default function IndustrialButton(props: LoadingButtonProps) {
  const MUIButton = styled(LoadingButton)<LoadingButtonProps>(({ theme }) => ({
    borderBottom: `2px solid ${
      props.color === "secondary"
        ? theme.palette.secondary.dark
        : theme.palette.primary.dark
    }`,
    borderRadius: "0px",
    borderTop: `3px solid ${
      props.color === "secondary"
        ? theme.palette.secondary.light
        : theme.palette.primary.light
    }`,
    boxShadow: "none",
    color: "white",
    filter: theme.filters.dropShadow,
    height: "33px",
    position: "relative",
    "&::before": {
      content: '""',
      height: "28px",
      width: "2px",
      backgroundColor:
        props.color === "secondary"
          ? theme.palette.secondary.light
          : theme.palette.primary.light,
      position: "absolute",
      left: "-2px",
    },
    "&::after": {
      content: '""',
      height: "28px",
      width: "3px",
      backgroundColor:
        props.color === "secondary"
          ? theme.palette.secondary.dark
          : theme.palette.primary.dark,
      position: "absolute",
      right: "-3px",
    },
    "&:hover": {
      filter: `${theme.filters.brightnessHover}`,
      backgroundColor:
        props.color === "secondary"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      boxShadow: "none",
    },
    "&.Mui-disabled": {
      backgroundColor:
        props.color === "secondary"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      filter: `${theme.filters.brightnessDisabled} ${theme.filters.dropShadow}`,
    },
  }));
  const theme = useTheme();
  console.log(theme);
  return (
    <MUIButton {...props}>
      <Typography sx={{ pb: 0.5 }}>{props.children}</Typography>
    </MUIButton>
  );
}
