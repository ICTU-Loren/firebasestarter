// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvACLyetjPc2nyUQxpw7gYriWkapzqOcM",
  authDomain: "getstartedwithfirebase-47341.firebaseapp.com",
  projectId: "getstartedwithfirebase-47341",
  storageBucket: "getstartedwithfirebase-47341.appspot.com",
  messagingSenderId: "122225718064",
  appId: "1:122225718064:web:afaf4a0551614a02fbcef5",
  measurementId: "G-Q7FMGNCH2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)