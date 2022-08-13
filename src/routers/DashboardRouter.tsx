import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";

export default function DashboardRouter() {
  return (
    <>
      <Header />
      <Routes>
        {/* TODO: make the user profile route with password change */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
