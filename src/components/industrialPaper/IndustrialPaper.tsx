import { Paper, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface IndustrialPaperProps {
  children: ReactNode;
  sx?: SxProps<Theme> | undefined;
}

export default function IndustrialPaper({
  children,
  sx,
}: IndustrialPaperProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "15px solid transparent",
        padding: "15px",
        borderImage:
          "url(https://firebasestorage.googleapis.com/v0/b/medabotsapp.appspot.com/o/container-border.png?alt=media&token=48e72d0d-ff26-477f-87fb-fafc0c08020e) 10 stretch",
        imageRendering: "pixelated",
        backgroundColor: "transparent",
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
}
