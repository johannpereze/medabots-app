import { Box } from "@mui/material";
import PartsSelector from "../../components/partsSelector/PartsSelector";
import { tinpetMale } from "../../dataBase/medaParts";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#23262e" }}>
      <PartsSelector medaParts={tinpetMale} />
    </Box>
  );
}
