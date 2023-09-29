// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY8JF_WBYo9vZOxVvzkbjuKnzA5ojkRXk",
  authDomain: "flipkart-ec882.firebaseapp.com",
  projectId: "flipkart-ec882",
  storageBucket: "flipkart-ec882.appspot.com",
  messagingSenderId: "456867894215",
  appId: "1:456867894215:web:d9a3d1280d6474c46a7fe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export default app;

