// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
import 'firebase/forestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC12rkvv8-g40UY03kiYPWmkvzNc3OSbtY",
  authDomain: "redux-help-queue-27dde.firebaseapp.com",
  projectId: "redux-help-queue-27dde",
  storageBucket: "redux-help-queue-27dde.appspot.com",
  messagingSenderId: "634887448464",
  appId: "1:634887448464:web:59875658afd90a3c32f515"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;