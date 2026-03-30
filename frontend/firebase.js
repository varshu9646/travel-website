import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWzwKSRjUOKmKjOvQdoWgLeyMIh_2c12w",
  authDomain: "travel-website-edcb2.firebaseapp.com",
  projectId: "travel-website-edcb2",
  storageBucket: "travel-website-edcb2.firebasestorage.app",
  messagingSenderId: "644618336242",
  appId: "1:644618336242:web:224845e4442b3dc6c51d6b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);