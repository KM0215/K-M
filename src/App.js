import './App.css';
import Referee from './components/Referee/Referee';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6rl0VRrs597gd_zQjUmHjQHRS76BUPYM",
  authDomain: "chessroyal-1db17.firebaseapp.com",
  projectId: "chessroyal-1db17",
  storageBucket: "chessroyal-1db17.appspot.com",
  messagingSenderId: "784295873015",
  appId: "1:784295873015:web:b20d62d5c6f4e56d6e46f2",
  measurementId: "G-ZD908SVC71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div id="app">
      <Referee/>
    </div>
  );
}

export default App;
