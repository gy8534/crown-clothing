import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDBcPipDtFAq_EOpd7BMPYZ3hxEyHB-n2g",
  authDomain: "crown-db-75a47.firebaseapp.com",
  databaseURL: "https://crown-db-75a47.firebaseio.com",
  projectId: "crown-db-75a47",
  storageBucket: "crown-db-75a47.appspot.com",
  messagingSenderId: "1009592534056",
  appId: "1:1009592534056:web:ade56b139405e15024611d",
  measurementId: "G-GM4WJ16WKK",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
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
