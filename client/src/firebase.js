// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase


const app = firebase.initializeApp({
  authDomain: "kiran-behara.firebaseapp.com",
  projectId: "kiran-behara",
  storageBucket: "kiran-behara.appspot.com",
  messagingSenderId: "450316158068",
  appId: "1:450316158068:web:d36b8bbbae6f5ee4b73d21",
});



export const auth = getAuth(app);

// export const auth = app.auth();
export default app;

