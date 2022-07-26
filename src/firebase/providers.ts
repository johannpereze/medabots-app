import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
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

// TODO: any
export const registerWithEmail = async ({
  email,
  password,
  displayName,
}: any) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    console.log("resp", resp);

    await sendEmailVerification(resp.user);
    const { uid, photoURL } = resp.user;
    await updateProfile(resp.user, { displayName });
    console.log(uid, photoURL);
    return { ok: true, uid, photoURL, email, displayName, user: resp.user };
  } catch (e) {
    return { ok: false, errorMessage: e };
  }
};

export const signInWithEmail = async ({ email, password }: any) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    console.log("signInWithEmailAndPassword resp", resp);
    const { uid, photoURL, displayName, emailVerified } = resp.user;
    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
      emailVerified,
      user: resp.user,
    };
  } catch (e) {
    return { ok: false, errorMessage: e };
  }
};

export const logoutFirebase = async () => {
  return FirebaseAuth.signOut();
};
