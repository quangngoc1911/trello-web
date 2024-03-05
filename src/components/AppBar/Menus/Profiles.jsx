import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { Avatar, IconButton, Tooltip } from "@mui/material";
function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            alt="quangngoc"
            sx={{ width: 38, height: 38 }}
            src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/285746628_1758670937819828_4205256036762508803_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeE2j4KjiXkVy-1sg-d-IGxNQjxcXZbI5u1CPFxdlsjm7Tho1BhjGtxjXF-jADYQClGaBf9EJXrwwXQPwsyPffM8&_nc_ohc=mcFHKs7EtwcAX9WIg-E&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBfa6JCcgA2JINQ2ZpPI53nrc_SuqnU_2DK3i7oPvXK5w&oe=65B67BE0"
          />
        </IconButton>
      </Tooltip>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar
            sx={{ width: 28, height: 28, mr: 2 }}
            src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/285746628_1758670937819828_4205256036762508803_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeE2j4KjiXkVy-1sg-d-IGxNQjxcXZbI5u1CPFxdlsjm7Tho1BhjGtxjXF-jADYQClGaBf9EJXrwwXQPwsyPffM8&_nc_ohc=mcFHKs7EtwcAX9WIg-E&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBfa6JCcgA2JINQ2ZpPI53nrc_SuqnU_2DK3i7oPvXK5w&oe=65B67BE0"
          />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Profiles;
