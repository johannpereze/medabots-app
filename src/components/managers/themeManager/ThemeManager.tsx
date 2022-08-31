import type {} from "@mui/lab/themeAugmentation";
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
import imgUrl from "../../../static/images/textbox-border.png";
declare module "@mui/material/styles" {
  // eslint-disable-next-line no-unused-vars
  interface Theme {
    customColors: string[];
    filters: {
      dropShadow: string;
      dropShadowInverted: string;
      brightnessDisabled: string;
      brightnessHover: string;
    };
  }
  // allow configuration using `createTheme`
  // eslint-disable-next-line no-unused-vars
  interface ThemeOptions {
    customColors?: string[];
    filters?: {
      dropShadow?: string;
      dropShadowInverted?: string;
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
        customColors: [
          "#B2CBDC",
          "#727C85",
          "#677786",
          "#4F5B67",
          "#3F4952",
          "#2C333A",
          "#99A7B3",
          "#1A2027",
          "#354450",
          "#374048",
          "#252E38",
          "#151A1F",
        ],
        typography: {
          fontFamily: ["Silkscreen"].join(","),
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: ({ ownerState, theme }) => ({
                boxShadow: "none",
                filter: theme.filters.dropShadow,
              }),
            },
          },
          MuiButton: {
            styleOverrides: {
              containedPrimary: ({ ownerState, theme }) => ({
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
              }),
              containedSecondary: ({ ownerState, theme }) => ({
                borderBottom: `2px solid ${theme.palette.secondary.dark}`,
                borderRadius: "0px",
                borderTop: `3px solid ${theme.palette.secondary.light}`,
                boxShadow: "none",
                color: "white",
                filter: theme.filters.dropShadow,
                height: "33px",
                position: "relative",
                "&::before": {
                  content: '""',
                  height: "28px",
                  width: "2px",
                  backgroundColor: theme.palette.secondary.light,
                  position: "absolute",
                  left: "-2px",
                },
                "&::after": {
                  content: '""',
                  height: "28px",
                  width: "3px",
                  backgroundColor: theme.palette.secondary.dark,
                  position: "absolute",
                  right: "-3px",
                },
                "&:hover": {
                  filter: `${theme.filters.brightnessHover}`,
                  backgroundColor: theme.palette.secondary.main,
                  boxShadow: "none",
                },
                "&.Mui-disabled": {
                  backgroundColor: theme.palette.secondary.main,
                  filter: `${theme.filters.brightnessDisabled} ${theme.filters.dropShadow}`,
                },
              }),
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              filled: ({ ownerState, theme }) => ({
                fontSize: "0.8rem",
              }),
            },
          },
          MuiFilledInput: {
            styleOverrides: {
              root: ({ ownerState, theme }) => ({
                borderRadius: "0px",
                border: "6px solid transparent",
                padding: "6px",
                height: "60px",
                fontSize: "0.9rem",
                borderImage: `url(${imgUrl}) 5 stretch`,
                borderImageOutset: "5px",
                imageRendering: "pixelated",
                backgroundColor: "#1a1f28", // TODO: Add color to palette
                "&:hover": {
                  backgroundColor: "#1a1f28",
                },
                "&:focus-within": {
                  backgroundColor: "#1a1f28",
                },
                "&.Mui-disabled": {
                  backgroundColor: "#1a1f28",
                },
              }),
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: ({ ownerState, theme }) => ({
                boxShadow: `0 2px ${theme.customColors[4]}, 0 -3px ${theme.customColors[1]}, 3px 0 ${theme.customColors[4]}, -2px 0 ${theme.customColors[1]}`,
                filter: `${theme.filters.dropShadow}`,
                backgroundColor: theme.customColors[3],
                borderRadius: 0,
                height: "40px",
                width: "40px",
                padding: 8,
                margin: 0,
                "&:hover": {
                  filter: `${theme.filters.brightnessHover}`,
                  backgroundColor: theme.customColors[3],
                },
              }),
            },
          },
          MuiInputBase: {
            styleOverrides: {
              input: ({ ownerState, theme }) => ({
                paddingLeft: "20px",
              }),
            },
          },
          MuiSelect: {
            styleOverrides: {
              standard: ({ ownerState, theme }) => ({
                boxShadow: `0 2px ${theme.customColors[4]}, 0 -3px ${theme.customColors[1]}, 3px 0 ${theme.customColors[4]}, -2px 0 ${theme.customColors[1]}`,
                filter: `${theme.filters.dropShadow}`,
                backgroundColor: theme.customColors[3],
                paddingTop: "17px",
              }),
            },
          },
        },
        filters: {
          dropShadow: `drop-shadow(0px 2px 0px #151A1F)`,
          dropShadowInverted: "drop-shadow(0px -2px 0px rgb(10.2, 12.5, 15.3))",
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
