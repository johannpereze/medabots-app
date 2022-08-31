import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import medaPartsDB, { Medabot, Medaparts } from "../../dataBase/medaParts";
import IndustrialBoxDark from "../industrialBoxDark/IndustrialBoxDark";
import MedabotSprite from "../medabotSprite/MedabotSprite";
import PixelIcon from "../pixelIcon/PixelIcon";

interface PartsSelectorProps {
  medaParts: Medabot;
}

export default function PartsSelector({ medaParts }: PartsSelectorProps) {
  const [medabot, setMedabot] = useState(medaParts);
  const theme = useTheme();

  const getAvailableParts = (allParts: Medaparts[]) => {
    const availableParts: {
      head: string[];
      right: string[];
      left: string[];
      legs: string[];
    } = {
      head: [],
      right: [],
      left: [],
      legs: [],
    };
    allParts.forEach((mp) => {
      switch (mp.part) {
        case "head":
          availableParts.head.push(mp.name);
          break;
        case "left arm":
          availableParts.left.push(mp.name);
          break;
        case "right arm":
          availableParts.right.push(mp.name);
          break;
        case "legs":
          availableParts.legs.push(mp.name);
          break;
        default:
          break;
      }
    });
    return availableParts;
  };

  const availableParts = getAvailableParts(medaPartsDB);

  const handlePartChange = (part: string, partName: string) => {
    console.log(
      "part",
      part,
      "partName",
      partName,
      "Next part: ",
      availableParts[part as keyof typeof availableParts][
        availableParts.head.indexOf(partName) + 1
      ] || availableParts[part as keyof typeof availableParts][0]
    );
    setMedabot({
      ...medabot,
      [part]:
        availableParts[part as keyof typeof availableParts][
          availableParts[part as keyof typeof availableParts].indexOf(
            partName
          ) + 1
        ] || availableParts[part as keyof typeof availableParts][0],
    });
  };

  // console.log("availableParts", availableParts);
  console.log("medabot", medabot);

  return (
    <>
      <Box
        sx={{
          p: 3,
          background: `linear-gradient( to bottom,  ${theme.customColors[1]}, ${theme.customColors[1]} 20%, ${theme.customColors[1]} 20%, ${theme.customColors[1]} 40%, ${theme.customColors[1]} 40%, ${theme.customColors[1]} 60%, ${theme.customColors[3]} 60%, ${theme.customColors[3]} 80%, ${theme.customColors[10]} 80%, ${theme.customColors[10]});`,
        }}
      >
        <Box sx={{ maxWidth: "400px", mx: "auto" }}>
          <MedabotSprite scale={2} animated={true} medaparts={medabot} />
        </Box>
      </Box>

      <Box sx={{ py: 4, maxWidth: "450px", mx: "auto" }}>
        {Object.entries(medabot).map(([part, partName]) => (
          <Box
            key={partName}
            sx={{
              display: "flex",
              mx: 4,
              my: 2,
              justifyContent: "space-between",
            }}
          >
            <IconButton onClick={() => handlePartChange(part, partName)}>
              <PixelIcon name="chevron-left" />
            </IconButton>
            <IndustrialBoxDark
              sx={{
                width: 1,
                mx: 2,
                my: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                align="center"
                sx={{ fontSize: partName.length > 12 ? "12px" : "16px" }}
              >
                {partName}
              </Typography>
            </IndustrialBoxDark>
            <IconButton onClick={() => handlePartChange(part, partName)}>
              <PixelIcon name="chevron-right" />
            </IconButton>
          </Box>
        ))}
      </Box>
    </>
  );
}
