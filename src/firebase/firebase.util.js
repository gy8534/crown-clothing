import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDBcPipDtFAq_EOpd7BMPYZ3hxEyHB-n2g",
    authDomain: "crown-db-75a47.firebaseapp.com",
    databaseURL: "https://crown-db-75a47.firebaseio.com",
    projectId: "crown-db-75a47",
    storageBucket: "crown-db-75a47.appspot.com",
    messagingSenderId: "1009592534056",
    appId: "1:1009592534056:web:ade56b139405e15024611d",
    measurementId: "G-GM4WJ16WKK"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :"select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;