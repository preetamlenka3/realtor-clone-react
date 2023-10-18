// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNFOpDZsBRMIvIeD-jOkVkjGdSk3UIii8",
  authDomain: "realtor-clone-react-21c8c.firebaseapp.com",
  projectId: "realtor-clone-react-21c8c",
  storageBucket: "realtor-clone-react-21c8c.appspot.com",
  messagingSenderId: "983664703479",
  appId: "1:983664703479:web:34f76ec225e47fa60360f2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();