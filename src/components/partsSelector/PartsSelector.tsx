import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import medaPartsDB, { Medabot, Medaparts } from "../../dataBase/medaParts";
import IndustrialContainer from "../industrialContainer/IndustrialContainer";
import MedabotSprite from "../medabotSprite/MedabotSprite";

interface PartsSelectorProps {
  medaParts: Medabot;
}

export default function PartsSelector({ medaParts }: PartsSelectorProps) {
  const [medabot, setMedabot] = useState(medaParts);

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

  /*   const tinpetMale: Medabot = {
    head: "tinpet male head",
    right: "tinpet male right arm",
    left: "tinpet male left arm",
    legs: "tinpet male legs",
  }; */

  /*   const handlePartChange = (part: string) => {
    setMedabot({ ...medabot, [part]: "missile" });
  }; */

  return (
    <Card
      sx={{
        display: "flex",
        my: 1,
        mx: 2,
        p: 2,
      }}
    >
      <IndustrialContainer>
        <MedabotSprite scale={2} animated medaparts={medabot} />
      </IndustrialContainer>
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Grid container spacing={0}>
            {Object.entries(medabot).map(([part, partName]) => (
              <>
                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <IconButton>
                    <ChevronLeftIcon
                      onClick={() => handlePartChange(part, partName)}
                    />
                  </IconButton>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ fontSize: "16px" }}
                  >
                    {partName}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <IconButton>
                    <ChevronRightIcon
                      onClick={() => handlePartChange(part, partName)}
                    />
                  </IconButton>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
