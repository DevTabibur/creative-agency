import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb6oajtDLlRgG-0opzvqrW-K4ZiNZUSgk",
  authDomain: "creative-agency-e1be9.firebaseapp.com",
  projectId: "creative-agency-e1be9",
  storageBucket: "creative-agency-e1be9.appspot.com",
  messagingSenderId: "575587973853",
  appId: "1:575587973853:web:1c9efc540f9837c70f7934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;