import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGrXE9vSfEZQCTU0JUF53Ru7pVBMgL6AI",
  authDomain: "loginfirebase-90297.firebaseapp.com",
  projectId: "loginfirebase-90297",
  storageBucket: "loginfirebase-90297.firebasestorage.app",
  messagingSenderId: "872460555466",
  appId: "1:872460555466:web:4116ae5a3a16cd70bbd033",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };