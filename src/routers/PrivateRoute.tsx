import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login, logout } from "../auth/authSlice";
import Backdrop from "../components/backdrop/Backdrop";
import { FirebaseAuth } from "../firebase/config";

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const userId = useAppSelector((state) => state.auth.uid);
  const dispatch = useAppDispatch();

  const getCurrentUser = async () => {
    try {
      onAuthStateChanged(FirebaseAuth, async (user) => {
        if (!user) return dispatch(logout({ errorMessage: null }));
        dispatch(login(user));
      });
      setCheckingAuth(false);
    } catch (e) {
      setCheckingAuth(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (checkingAuth) {
    return <Backdrop />;
  }
  return userId === null ? <Navigate to="/login" /> : children;
}
