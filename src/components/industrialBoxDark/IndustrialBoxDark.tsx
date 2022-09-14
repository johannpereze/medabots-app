import { Box, BoxProps, styled } from "@mui/material";

export default function IndustrialBoxDark(props: BoxProps) {
  const MUIBox = styled(Box)<BoxProps>(({ theme }) => ({
    backgroundColor: theme.customColors[7],
    borderLeft: `2px solid ${theme.customColors[11]}`,
    position: "relative",
    "&::before": {
      content: '""',
      height: "3px",
      width: "calc(100% - 2px)",
      backgroundColor: theme.customColors[7],
      position: "absolute",
      bottom: "-3px",
    },
    "&::after": {
      content: '""',
      height: "3px",
      width: "calc(100% - 2px)",
      backgroundColor: theme.customColors[11],
      position: "absolute",
      top: "-3px",
    },
  }));

  return <MUIBox {...props}>{props.children}</MUIBox>;
}
