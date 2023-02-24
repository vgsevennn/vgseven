import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJm9KhmXRvq41j9YI_Fyw7E0qnYJIH25k",
  authDomain: "vgsevennn.firebaseapp.com",
  projectId: "vgsevennn",
  storageBucket: "vgsevennn.appspot.com",
  messagingSenderId: "722555305247",
  appId: "1:722555305247:web:b68e3f0cec87d0c803442a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
