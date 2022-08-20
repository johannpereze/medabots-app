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
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import toggleMenuDrawer from "../../helpers/toggleMenuDrawer";

export interface DrawerItem {
  name: string;
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}

interface MenuDrawerProps {
  drawerItems: DrawerItem[];
}

export default function MenuDrawer({ drawerItems }: MenuDrawerProps) {
  const { showDrawer } = useAppSelector((state: RootState) => state.header);
  const dispatch = useAppDispatch();

  const toggleDrawer = (event: KeyboardEvent | MouseEvent) => {
    toggleMenuDrawer({ event, dispatch });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      {/* TODO: support personalized components here */}
      <List>
        {drawerItems.map(({ name, label, icon, onClick }) => (
          <ListItem button key={name} onClick={onClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* TODO: support personalized components here */}
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
