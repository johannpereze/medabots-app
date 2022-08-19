import { ExitToApp, Extension } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { startLogout } from "../auth/authSlice";
import Header, { MenuItemType } from "../components/header/Header";
import MenuDrawer, { DrawerItem } from "../components/menuDrawer/MenuDrawer";
import Home from "../pages/home/Home";

export default function DashboardRouter() {
  const dispatch = useAppDispatch();
  const [t] = useTranslation();
  const { user } = useAppSelector((state) => state.auth);

  const menuItems: MenuItemType[] = [
    {
      label: "login.sign_out",
      icon: <ExitToApp />,
      onClick: async () => await dispatch(startLogout()),
    },
  ];

  const drawerItems: DrawerItem[] = [
    {
      name: "module A",
      label: t("general.module_a"),
      icon: <Extension />,
      onClick: () => {},
    },
  ];
  return (
    <>
      <Header menuItems={menuItems} userName={user?.displayName || ""} />
      <MenuDrawer drawerItems={drawerItems} />
      <Routes>
        {/* TODO: make the user profile route with password change */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
