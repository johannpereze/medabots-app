import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/error404/Error404";
import Login from "../pages/login/Login";

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="register" element={<Login step="register" />} />

      <Route
        path="password-recovery"
        element={<Login step="passwordRecovery" />}
      />

      <Route path="/" element={<Login step="login" />} />
      {/* TODO: do the route for getting the confirmation code from url */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
