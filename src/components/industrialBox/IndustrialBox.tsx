import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface IndustrialPaperProps {
  children: ReactNode;
  sx?: SxProps<Theme> | undefined;
}

export default function IndustrialBox({ children, sx }: IndustrialPaperProps) {
  return (
    <Box
      sx={{
        border: "10px solid",
        borderImage:
          "url(https://firebasestorage.googleapis.com/v0/b/medabotsapp.appspot.com/o/container-border.png?alt=media&token=48e72d0d-ff26-477f-87fb-fafc0c08020e) 10",
        borderImageSlice: "10",
        borderImageOutset: "1",
        imageRendering: "pixelated",
        backgroundColor: (theme) => theme.palette.background.paper,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
