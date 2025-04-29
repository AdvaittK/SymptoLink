import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
} from "firebase/auth"
import { auth } from "./config"

// Sign in with email and password
export const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

// Sign up with email and password
export const signUp = async (email: string, password: string, displayName: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(userCredential.user, { displayName })
  return userCredential
}

// Sign in with Google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  
  // Add scopes if needed
  provider.addScope('profile');
  provider.addScope('email');
  
  // Set custom parameters
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  
  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Google sign-in error details:", error);
    throw error; // Rethrow to be handled by the UI
  }
}

// Sign in with Facebook
export const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider()
  return signInWithPopup(auth, provider)
}

// Reset password
export const resetPassword = async (email: string) => {
  return sendPasswordResetEmail(auth, email)
}

// Sign out
export const signOut = async () => {
  return firebaseSignOut(auth)
}
