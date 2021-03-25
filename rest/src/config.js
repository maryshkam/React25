import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEh1bizgjPJvpxmLiPogR-GF-pSTpDBvU",
  authDomain: "bootcamb25.firebaseapp.com",
  projectId: "bootcamb25",
  storageBucket: "bootcamb25.appspot.com",
  messagingSenderId: "464674473737",
  appId: "1:464674473737:web:e546472c29f85dd6a635d8",
  measurementId: "G-49Z2J7XPL8",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
