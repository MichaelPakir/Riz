import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7oG1ZAXshg7lWsspDzao6OcrmryAyc30",
  authDomain: "riz-app-611ba.firebaseapp.com",
  projectId: "riz-app-611ba",
  storageBucket: "riz-app-611ba.firebasestorage.app",
  messagingSenderId: "398884209733",
  appId: "1:398884209733:web:66db5222c80ac09cb6cf2c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
