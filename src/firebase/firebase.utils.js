import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCiorRvMloK6RoaLaa9ZbbtioyrJv8jUa8",
  authDomain: "crwn-dv.firebaseapp.com",
  databaseURL: "https://crwn-dv.firebaseio.com",
  projectId: "crwn-dv",
  storageBucket: "crwn-dv.appspot.com",
  messagingSenderId: "22809669440",
  appId: "1:22809669440:web:bde62099d93112c06454a5",
  measurementId: "G-P05T95G1RB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
