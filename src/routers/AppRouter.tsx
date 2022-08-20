import { Route, Routes } from "react-router-dom";
import ConfirmEmail from "../pages/login/ConfirmEmail";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import AuthRouter from "./AuthRouter";
import DashboardRouter from "./DashboardRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/confirm-email" element={<ConfirmEmail />} />
      <Route
        path="/login/*"
        element={
          <PublicRoute>
            <AuthRouter />
          </PublicRoute>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <DashboardRouter />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
