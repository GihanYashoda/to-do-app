// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRMpFPHPXCds_kd2PkX1evAUzSJ1Ecd8k",
    authDomain: "to-do-app-21ce0.firebaseapp.com",
    projectId: "to-do-app-21ce0",
    storageBucket: "to-do-app-21ce0.appspot.com",
    messagingSenderId: "290203449299",
    appId: "1:290203449299:web:305b1d5c98054561aae126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};