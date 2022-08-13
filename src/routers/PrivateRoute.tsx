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
  const userId = useAppSelector((state) => state.auth.uid);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCurrentUser(dispatch, setCheckingAuth);
  }, []);

  if (checkingAuth) {
    return <Backdrop />;
  }
  return userId === null ? <Navigate to="/login" /> : children;
}
