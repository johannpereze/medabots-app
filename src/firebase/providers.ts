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

export const signInWithGoole = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result); In case I need the accesToken or IdToken
    const { displayName, email, photoURL, uid } = result.user;
    return { ok: true, displayName, email, photoURL, uid };
  } catch (e) {
    return { ok: false, errorMessage: e };
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
      uid,
      photoURL,
      status: "not_authenticated",
      displayName,
      email,
      verified: false,
      errorMessage: "go_to_your_email_inbox_and_click_the_confirmation_link",
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
      uid,
      photoURL,
      email,
      displayName,
      verified: emailVerified,
      errorMessage: emailVerified ? null : "email_not_verified",
      status: emailVerified ? "authenticated" : "not_authenticated",
    };
  } catch (e) {
    return { ...authInitialState, errorMessage: `${e}` };
  }
};

export const logoutFirebase = async () => {
  return FirebaseAuth.signOut();
};
