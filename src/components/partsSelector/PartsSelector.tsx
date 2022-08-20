import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { metabee } from "../../dataBase/medaParts";
import MedabotSprite from "../medabotSprite/MedabotSprite";

export default function PartsSelector() {
  const parts = Object.values(metabee);

  return (
    <Card sx={{ display: "flex", my: 1, mx: 4, p: 4 }}>
      <Paper elevation={0} sx={{ p: 2 }}>
        <MedabotSprite scale={2} animated medaparts={metabee} />
      </Paper>
      {/* {metabee} */}
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Grid container spacing={0}>
            {parts.map((part) => (
              <>
                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <IconButton>
                    <ChevronLeftIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6" align="center">
                    {part}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <IconButton>
                    <ChevronRightIcon />
                  </IconButton>
                </Grid>
              </>
            ))}
          </Grid>
          {/* <TableContainer component={Box}>
            <Table sx={{ width: "100%" }}>
              <TableBody>
                {parts.map((part) => (
                  <TableRow
                    key={part.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <IconButton>
                        <SkipPreviousIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">{part}</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <SkipNextIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
        </Box>
      </CardContent>
    </Card>
  );
}
