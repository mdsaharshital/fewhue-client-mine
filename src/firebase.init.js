// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNvSrhBV0Rqn2r2IklhQp4EJtcQV1pfDY",
  authDomain: "fewheu.firebaseapp.com",
  projectId: "fewheu",
  storageBucket: "fewheu.appspot.com",
  messagingSenderId: "712909476136",
  appId: "1:712909476136:web:142c788403700091ca001d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
