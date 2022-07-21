import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import AuthRouter from "./AuthRouter";
import DashboardRouter from "./DashboardRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
