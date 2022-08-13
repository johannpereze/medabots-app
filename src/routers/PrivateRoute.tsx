import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCurrentUser } from "../auth/getCurrentUser";
import Backdrop from "../components/backdrop/Backdrop";

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const isEmailVerified = useAppSelector((state) => state.auth.verified);

  useEffect(() => {
    getCurrentUser(dispatch, setCheckingAuth, isEmailVerified);
  }, []);

  if (checkingAuth) {
    return <Backdrop />;
  }
  return status !== "authenticated" ? <Navigate to="/login" /> : children;
}
