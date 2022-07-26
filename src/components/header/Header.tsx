import MenuIcon from "@mui/icons-material/Menu";
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { KeyboardEvent, MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../app/hooks";
import toggleMenuDrawer from "../../helpers/toggleMenuDrawer";
import PixelIcon from "../pixelIcon/PixelIcon";

export interface MenuItemType {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}

interface HeaderProps {
  menuItems: MenuItemType[];
  userName: string;
}

export default function Header({ menuItems, userName }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [t] = useTranslation();
  const dispatch = useAppDispatch();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (event: KeyboardEvent | MouseEvent) => {
    toggleMenuDrawer({ event, dispatch });
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem disabled>
        <ListItemText>{userName}</ListItemText>
      </MenuItem>
      <Divider />
      {menuItems.map(({ icon, label, onClick }) => (
        <MenuItem onClick={onClick} key={label}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{t(label)}</ListItemText>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Medabots
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            {/* <IconButton size="large" color="inherit">
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <PixelIcon name="user" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
