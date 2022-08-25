import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useMemo } from "react";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
declare module "@mui/material/styles" {
  // eslint-disable-next-line no-unused-vars
  interface Theme {
    filters: {
      dropShadow: string;
      brightnessDisabled: string;
      brightnessHover: string;
    };
  }
  // allow configuration using `createTheme`
  // eslint-disable-next-line no-unused-vars
  interface ThemeOptions {
    filters?: {
      dropShadow?: string;
      brightnessDisabled?: string;
      brightnessHover?: string;
    };
  }
}

interface ThemeManagerProps {
  children: JSX.Element;
}
export default function ThemeManager({ children }: ThemeManagerProps) {
  const { themeMode, themeStyle } = useAppSelector(
    (state: RootState) => state.themeManager
  );
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const paletteMode = (): PaletteMode | undefined => {
    if (themeMode === "inherited") {
      return prefersDarkMode ? "dark" : "light";
    }
    return themeStyle;
  };

  const customTheme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: ["Silkscreen"].join(","),
        },
        filters: {
          dropShadow: "drop-shadow(0px 2px 0px #1a1f28)",
          brightnessDisabled: "brightness(60%)",
          brightnessHover: "brightness(80%)",
        },
        palette: {
          mode: paletteMode(),
          primary: {
            main: "#43B46A",
            dark: "#2F7D4D",
            light: "#62D88B",
          },
          secondary: {
            main: "#258FE9",
            dark: "#1078D1",
            light: "#4FAEFF",
          },
          ...(paletteMode() === "light"
            ? {
                // palette values for light mode
                background: {
                  paper: "#fff",
                  default: "#f8f8f8",
                },
              }
            : {
                // palette values for dark mode
                background: {
                  paper: "#252e38",
                  default: "#1a1f28",
                },
              }),
        },
      }),
    [themeStyle]
  );
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
