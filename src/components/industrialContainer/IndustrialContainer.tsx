import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import imgUrl from "../../static/images/container-border.png";

interface IndustrialContainerProps {
  children: ReactNode;
  sx?: SxProps<Theme> | undefined;
}

export default function IndustrialContainer({
  children,
  sx,
}: IndustrialContainerProps) {
  return (
    <Box
      sx={{
        border: "10px solid",
        borderImage: `url(${imgUrl}) 10`,
        borderImageSlice: "10",
        borderImageOutset: "0.2",
        imageRendering: "pixelated",
        backgroundColor: (theme) => theme.palette.background.paper,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
