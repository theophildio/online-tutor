// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlSumYGUZ6dCLxw3otQ6_lJ0kbFPk0N90",
  authDomain: "online-tutor-51c49.firebaseapp.com",
  projectId: "online-tutor-51c49",
  storageBucket: "online-tutor-51c49.appspot.com",
  messagingSenderId: "400423774386",
  appId: "1:400423774386:web:abc07a8d96912a438f01ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;