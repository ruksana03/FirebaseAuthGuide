
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEelvsF3-without-cnSyir5Q",
  authDomain: "fir-auth-without-gueapp.com",
  projectId: "fir-auth-witho89",
  storageBucket: "fir-auth-withoupot.com",
  messagingSenderId: "witho81",
  appId: "1:934eb:witho954d485dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)