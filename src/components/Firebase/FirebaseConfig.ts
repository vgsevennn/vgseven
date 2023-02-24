import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "#",
  authDomain: "vgsevennn.firebaseapp.com",
  projectId: "vgsevennn",
  storageBucket: "vgsevennn.appspot.com",
  messagingSenderId: "#",
  appId: "#",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
