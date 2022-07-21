import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Login from "../pages/login/Login";

export default function AuthRouter() {
  const userEmail = useAppSelector((state) => state.auth.email);
  return (
    <Routes>
      <Route path="register" element={<Login step="register" />} />
      <Route
        path="password-recovery"
        element={<Login step="passwordRecovery" />}
      />
      <Route
        path="confirmation-code"
        element={
          userEmail === "" ? (
            <Navigate to="/login" />
          ) : (
            <Login step="confirmationCode" />
          )
        }
      />
      <Route path="/" element={<Login step="login" />} />
      {/* TODO: Create error 404 component */}
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  );
}
