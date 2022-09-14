import { useTranslation } from "react-i18next";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { startLogout } from "../auth/authSlice";
import Header, { MenuItemType } from "../components/header/Header";
import MenuDrawer, { DrawerItem } from "../components/menuDrawer/MenuDrawer";
import PartsCreator from "../components/partsCreator/PartsCreator";
import PixelIcon from "../components/pixelIcon/PixelIcon";
import { metabee } from "../dataBase/medaParts";
import Home from "../pages/home/Home";

export default function DashboardRouter() {
  const dispatch = useAppDispatch();
  const [t] = useTranslation();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const menuItems: MenuItemType[] = [
    {
      label: "login.sign_out",
      icon: <PixelIcon name="logout" />,
      onClick: async () => await dispatch(startLogout()),
    },
  ];

  const drawerItems: DrawerItem[] = [
    {
      name: "partsCreator",
      label: t("general.parts_creator"),
      icon: <PixelIcon name="android" />,
      onClick: () => navigate("/partes-creator"),
    },
  ];
  return (
    <>
      <Header menuItems={menuItems} userName={user?.displayName || ""} />
      <MenuDrawer drawerItems={drawerItems} />
      <Routes>
        {/* TODO: make the user profile route with password change */}
        <Route
          path="/partes-creator"
          element={<PartsCreator medaparts={metabee} scale={4} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
