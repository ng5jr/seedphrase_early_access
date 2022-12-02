// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBID2_mNtvdR40d_AdmO2Johv2Z6Vs6er8",
  authDomain: "seedphrasecloud.firebaseapp.com",
  projectId: "seedphrasecloud",
  storageBucket: "seedphrasecloud.appspot.com",
  messagingSenderId: "370948634340",
  appId: "1:370948634340:web:fe66c70cc1a7c6e9b21ef1",
  measurementId: "G-2T0YH7D22W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const addUser = (email) => {
  const usersRef = doc(db, "early_access", email);
  setDoc(usersRef, { email: email }, { merge: true });
};
