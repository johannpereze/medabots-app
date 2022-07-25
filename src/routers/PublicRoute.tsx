import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Backdrop from "../components/backdrop/Backdrop";

interface PublicRouteProps {
  children: JSX.Element;
}

export default function PublicRoute({ children }: PublicRouteProps) {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const userId = useAppSelector((state) => state.auth.uid);

  const getCurrentUser = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      /* const {
        email,
        family_name: familyName,
        given_name: givenName,
        sub,
      } = user.attributes; */
      /* dispatch(
        setUser({
          user_id: sub,
          email,
          family_name: familyName,
          given_name: givenName,
        })
      ); */
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
  return userId === null ? children : <Navigate to="/" />;
}
