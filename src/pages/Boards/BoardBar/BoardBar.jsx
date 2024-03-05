import { Box, Button, Tooltip } from "@mui/material";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { capitalizeFirstLetter } from "~/utils/formatters";
const MENU_STYLE = {
  color: "white",
  bgColor: "transparent",
  border: "none",
  px: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgColor: "primary.60",
  },
};
function BoardBar({ board }) {
  return (
    <Box
      px={2}
      sx={{
        witdh: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label={board.title}
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board.type)}
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add to google"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<AutorenewIcon />}
          label="Automation"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          sx={MENU_STYLE}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { borderColor: "white" },
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={5}
          sx={{
            gap: "10px",
            //css cho từng avatar
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: "16px",
              border: "none",
            },
          }}
        >
          <Tooltip title="quang ngọc">
            <Avatar
              alt="Quang Ngọc"
              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/62216570_2369418210046924_8503660544543162368_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeGq56qkdyhof5wTeB3mAeR9TtXaGDd7W09O1doYN3tbT8_4wa3yvTp-CSoU5tJpYGJo_Z2XtsNm9rgOAuq8ySWE&_nc_ohc=CfndsQoH4ZEAX8acGGD&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfD58PMpBqQKv53u470cYPXY4lYhiOoCDV6tPQiTnn8RzQ&oe=65D8E6A0"
            />
          </Tooltip>
          <Tooltip title="quang ngọc">
            <Avatar
              alt="Quang Ngọc"
              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.18169-9/29594472_363030867545467_8187734799586476123_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFEVfGmgKH5jEyGnvqMI566JPrzGGey56Uk-vMYZ7LnpWvAgiTrPKOzFcWJolpbnD2sg0zYp6bvU64liJy7e1Hs&_nc_ohc=gjfWRk_GaaoAX8avSdF&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfC2LFWJqiFpFqB72JtoPD2wnEce6Ki-vvjvuuKYFGId1A&oe=65D8B5C5"
            />
          </Tooltip>
          <Tooltip title="quang ngọc">
            <Avatar
              alt="Quang Ngọc"
              src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-9/90470379_1143088989378029_8775524020100530176_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFkFD5cbhA0l66wmSVGacTn21kZjW7diRjbWRmNbt2JGP6V-xuignNO2syD8UZeoIf2MwgqDD6mFK4KOKPz0X1G&_nc_ohc=b8a1cDUgvMgAX-0UPPH&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAOLxBGhVzpOdceoTxol32EToZTU-WVvQDZHsMqdCOHKw&oe=65D8E1D7"
            />
          </Tooltip>
          <Tooltip title="quang ngọc">
            <Avatar
              alt="Quang Ngọc"
              src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/87176257_231679481191830_3364253440644481024_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGOpSSrfAYqSJQlJkHjDJzT13nyhSK1g8_XefKFIrWDz8oE1nQICTJEVnnmvKLGJpAOLrt42ExaA4i3qaNXnM8j&_nc_ohc=hT2uR3OD6usAX-pdBQ0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfARG0nSNTVqbAF_fEgbcchMHqmrCGixpGtW7g5_SOhd0w&oe=65D8D1A3"
            />
          </Tooltip>
          <Tooltip title="quang ngọc">
            <Avatar alt="Quang Ngọc" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="quang ngọc">
            <Avatar alt="Quang Ngọc" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
