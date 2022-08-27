import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../app/hooks";
import {
  changeThemeMode,
  changeThemeStyle,
} from "../managers/themeManager/themeManagerSlice";
import PixelIcon from "../pixelIcon/PixelIcon";

export default function ThemeSelector() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [t] = useTranslation();

  const toggleThemeStyle = () => {
    dispatch(changeThemeStyle());
    dispatch(changeThemeMode());
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
      }}
    >
      <Typography variant="body2">
        {t(`general.${theme.palette.mode}_mode`)}
      </Typography>
      <IconButton sx={{ ml: 1 }} onClick={toggleThemeStyle} color="inherit">
        {theme.palette.mode === "dark" ? (
          <PixelIcon name="moon" />
        ) : (
          <PixelIcon name="sun-alt" />
        )}
      </IconButton>
    </Box>
  );
}
