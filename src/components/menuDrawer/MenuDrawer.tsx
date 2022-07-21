import BadgeIcon from "@mui/icons-material/Badge";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { KeyboardEvent, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import toggleMenuDrawer from "../../helpers/toggleMenuDrawer";

export default function SwipeableTemporaryDrawer() {
  const { t } = useTranslation();
  const { showDrawer } = useAppSelector((state: RootState) => state.header);
  const dispatch = useAppDispatch();

  const toggleDrawer = (event: KeyboardEvent | MouseEvent) => {
    toggleMenuDrawer({ event, dispatch });
  };

  const drawerItems = [
    {
      name: "user_settings",
      label: t("general.user_settings"),
      icon: <BadgeIcon />,
      onClick: () => {},
    },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {drawerItems.map(({ name, label, icon, onClick }) => (
          <ListItem button key={name} onClick={onClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={t("login.sign_out")} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Box>
        <SwipeableDrawer
          anchor="left"
          open={showDrawer}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          {list()}
        </SwipeableDrawer>
      </Box>
    </div>
  );
}
