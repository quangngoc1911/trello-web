import { Box } from "@mui/material";
import ModeSelect from "../../components/ModeSelect";
function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        witdh: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <ModeSelect />
    </Box>
  );
}

export default AppBar;
