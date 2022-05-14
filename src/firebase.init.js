// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3ASvblb1jEo3tvNgcZXHkLIXpo_knYfQ",
    authDomain: "ema-john-simple-2b642.firebaseapp.com",
    projectId: "ema-john-simple-2b642",
    storageBucket: "ema-john-simple-2b642.appspot.com",
    messagingSenderId: "150510935616",
    appId: "1:150510935616:web:f73320742483df05f1c9a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;