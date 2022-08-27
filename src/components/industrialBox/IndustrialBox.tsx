import { Box, BoxProps, styled, useTheme } from "@mui/material";

export default function IndustrialBox(props: BoxProps) {
  const MUIBox = styled(Box)<BoxProps>(({ theme }) => ({
    backgroundColor: theme.customColors[3],

    borderTop: `3px solid ${theme.customColors[1]}`,
    borderBottom: `2px solid ${theme.customColors[4]}`,
    filter: theme.filters.dropShadow,
    position: "relative",
    "&::before": {
      content: '""',
      height: "100%",
      width: "2px",
      backgroundColor: theme.customColors[1],
      position: "absolute",
      left: "-2px",
      top: 0,
    },
    "&::after": {
      content: '""',
      height: "100%",
      width: "3px",
      backgroundColor: theme.customColors[4],
      position: "absolute",
      right: "-3px",
      top: 0,
    },
  }));

  const theme = useTheme();
  console.log(theme);

  return <MUIBox {...props}>{props.children}</MUIBox>;
}
