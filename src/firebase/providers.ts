import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { authInitialState, AuthState, SignInInfo } from "../auth/authSlice";
import { serializeValue } from "../helpers/serializeValue";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoole = async (): Promise<AuthState> => {
  try {
    const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
    return {
      user: serializeValue(user),
      errorMessage: null,
      status: "authenticated",
    };
  } catch (e) {
    return {
      ...authInitialState,
      errorMessage: `${e}`,
    };
  }
};

/* export const registerWithEmail = async ({
  email,
  password,
  displayName,
}: SignUpInfo): Promise<AuthState> => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    await updateProfile(user, { displayName });
    await sendEmailVerification(user);

    return {
      user,
      errorMessage: "go_to_your_email_inbox_and_click_the_confirmation_link",
      status: "not_authenticated",
    };
  } catch (e) {
    return {
      ...authInitialState,
      errorMessage: `${e}`,
    };
  }
}; */

export const signInWithEmail = async ({
  email,
  password,
}: SignInInfo): Promise<AuthState> => {
  try {
    const { user } = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    // const { uid, photoURL, displayName, emailVerified } = user;
    return {
      user: serializeValue(user),
      errorMessage: user.emailVerified ? null : "email_not_verified",
      // photoURL,
      status: user.emailVerified ? "authenticated" : "not_authenticated",
      // uid,
      // emailVerified,
    };
  } catch (e) {
    return { ...authInitialState, errorMessage: `${e}` };
  }
};

export const logoutFirebase = async () => {
  return FirebaseAuth.signOut();
};
