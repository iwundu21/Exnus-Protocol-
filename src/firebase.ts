import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC3qrFDoJHN4P23l8Pt1q_BF-rtbvbcuk",
  authDomain: "waitlist-db03f.firebaseapp.com",
  projectId: "waitlist-db03f",
  storageBucket: "waitlist-db03f.firebasestorage.app",
  messagingSenderId: "592154275149",
  appId: "1:592154275149:web:9262626b013d9030c85b04",
  measurementId: "G-7520DG0D7L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
