// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe_UXkqZ-CvSGiamI8lx5xv8AxE0_fEEA",
    authDomain: "laptop-warehouse-9b862.firebaseapp.com",
    projectId: "laptop-warehouse-9b862",
    storageBucket: "laptop-warehouse-9b862.appspot.com",
    messagingSenderId: "552945551085",
    appId: "1:552945551085:web:60e317f45f294cd6272ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;