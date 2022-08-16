import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import {
  authInitialState,
  AuthState,
  SignInInfo,
  SignUpInfo,
} from "../auth/authSlice";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoole = async (): Promise<AuthState> => {
  try {
    const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid, emailVerified } = user;
    return {
      displayName,
      email,
      errorMessage: null,
      photoURL,
      status: "authenticated",
      uid,
      emailVerified,
    };
  } catch (e) {
    return {
      ...authInitialState,
      errorMessage: `${e}`,
    };
  }
};

export const registerWithEmail = async ({
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

    const { uid, photoURL } = user;
    return {
      displayName,
      email,
      errorMessage: "go_to_your_email_inbox_and_click_the_confirmation_link",
      photoURL,
      status: "not_authenticated",
      uid,
      emailVerified: false,
    };
  } catch (e) {
    return {
      ...authInitialState,
      errorMessage: `${e}`,
    };
  }
};

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
    const { uid, photoURL, displayName, emailVerified } = user;
    return {
      displayName,
      email,
      errorMessage: emailVerified ? null : "email_not_verified",
      photoURL,
      status: emailVerified ? "authenticated" : "not_authenticated",
      uid,
      emailVerified,
    };
  } catch (e) {
    return { ...authInitialState, errorMessage: `${e}` };
  }
};

export const logoutFirebase = async () => {
  return FirebaseAuth.signOut();
};
