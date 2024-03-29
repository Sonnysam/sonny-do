import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgdFPomZ8-zKZKDcTI70iDr2JkSOMfKGg",
  authDomain: "sonny-do.firebaseapp.com",
  projectId: "sonny-do",
  storageBucket: "sonny-do.appspot.com",
  messagingSenderId: "211137098979",
  appId: "1:211137098979:web:61407053cc98ea0043c1d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
