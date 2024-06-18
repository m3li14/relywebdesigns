// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAcFmehlMXIs_NrAb_k5b2gw6VDicjMCGo",
    authDomain: "webdesign-32c00.firebaseapp.com",
    projectId: "webdesign-32c00",
    storageBucket: "webdesign-32c00.appspot.com",
    messagingSenderId: "65230320031",
    appId: "1:65230320031:web:b980ed7af700075575cdaa",
    measurementId: "G-MYTSFZLEMC"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);