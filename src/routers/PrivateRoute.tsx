import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCurrentUser } from "../auth/getCUrrentUser";
import Backdrop from "../components/backdrop/Backdrop";

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCurrentUser(dispatch, setCheckingAuth);
  }, []);

  if (checkingAuth) {
    return <Backdrop />;
  }
  return status !== "authenticated" ? <Navigate to="/login" /> : children;
}
