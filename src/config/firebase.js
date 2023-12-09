import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6rl0VRrs597gd_zQjUmHjQHRS76BUPYM",
  authDomain: "chessroyal-1db17.firebaseapp.com",
  projectId: "chessroyal-1db17",
  storageBucket: "chessroyal-1db17.appspot.com",
  messagingSenderId: "784295873015",
  appId: "1:784295873015:web:b20d62d5c6f4e56d6e46f2",
  measurementId: "G-ZD908SVC71"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
