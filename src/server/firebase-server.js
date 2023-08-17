import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBrSEOowCasDN_fbfOL2g9Hqah7qfajM8g",
    authDomain: "portfolio-a5ae2.firebaseapp.com",
    databaseURL: "https://portfolio-a5ae2-default-rtdb.firebaseio.com",
    projectId: "portfolio-a5ae2",
    storageBucket: "portfolio-a5ae2.appspot.com",
    messagingSenderId: "728592956567",
    appId: "1:728592956567:web:1fa8b64719aa1c54163dd2",
    measurementId: "G-W3GEDF11ZW"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export  { firestore };

