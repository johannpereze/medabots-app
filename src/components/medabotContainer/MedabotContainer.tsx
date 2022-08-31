import { Box, useTheme } from "@mui/material";
import { metabee } from "../../dataBase/medaParts";
import MedabotSprite from "../medabotSprite/MedabotSprite";

export default function MedabotContainer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: 3,
        background: `linear-gradient( to bottom,  ${theme.customColors[1]}, ${theme.customColors[1]} 20%, ${theme.customColors[1]} 20%, ${theme.customColors[1]} 40%, ${theme.customColors[1]} 40%, ${theme.customColors[1]} 60%, ${theme.customColors[3]} 60%, ${theme.customColors[3]} 80%, ${theme.customColors[10]} 80%, ${theme.customColors[10]});`,
      }}
    >
      <MedabotSprite scale={2} animated medaparts={metabee} />
    </Box>
  );
}
