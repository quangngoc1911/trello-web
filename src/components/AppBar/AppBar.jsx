import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Typography from "@mui/material/Typography";
import ModeSelect from "~/components/ModeSelect/ModeSelect";
import Tooltip from "@mui/material/Tooltip";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddIcon from "@mui/icons-material/Add";
// import { ReactComponent as trelloIcons } from "~/assets/trello.svg";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Template from "./Menus/Template";
import { Badge, Button, InputAdornment, TextField } from "@mui/material";
import Profiles from "./Menus/Profiles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
function AppBar() {
  const [searchValue, setSearchValue] = useState();
  return (
    <Box
      px={2}
      sx={{
        witdh: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {/* <SvgIcon
            component={trelloIcons}
            inheritViewBox
            sx={{ color: "white" }}
          /> */}
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Trello
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Workspaces />
            <Recent />
            <Starred />
            <Template />
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
                color: "white",
                border: "none",
                "&:hover": { border: "none" },
              }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          // type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                onClick={() => setSearchValue("")}
                sx={{
                  color: searchValue ? "white" : "transparent",
                  cursor: "pointer",
                }}
              />
            ),
          }}
          sx={{
            minWidth: 120,
            maxWidth: "180px",
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" },
            },
          }}
        />

        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <Badge color="secondary" sx={{ cursor: "pointer" }}>
            <HelpOutlineIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
