import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyBisFa57pZv7_lkDYlR3hWX3Xto8q4oni0",
  authDomain: "netflix-clone-89178.firebaseapp.com",
  databaseURL: "https://netflix-clone-89178-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-89178",
  storageBucket: "netflix-clone-89178.appspot.com",
  messagingSenderId: "877781110046",
  appId: "1:877781110046:web:116392880fa3d27e2b8d0f",
};

const app = initializeApp(firebaseConfig);

// seedDatabase();
const db = getFirestore();

export default db;
