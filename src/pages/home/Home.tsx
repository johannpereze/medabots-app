import { Grid } from "@mui/material";
import PartsSelector from "../../components/partsSelector/PartsSelector";

export default function Home() {
  return (
    <>
      <Grid container spacing={0} sx={{ my: 2 }}>
        <Grid item xs={12} md={6}>
          <PartsSelector />
        </Grid>
        <Grid item xs={12} md={6}>
          <PartsSelector />
        </Grid>
      </Grid>
    </>
  );
}
