
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDisM4yXL7A_nDMnhuCkGx8QbRnn8gy4mI",
  authDomain: "travelmatch-53feve7.firebaseapp.com",
  projectId: "travelmatch-53feve7",
  storageBucket: "travelmatch-53feve7.appspot.com",
  messagingSenderId: "986000910844",
  appId: "1:986000910844:web:7fc0bd65fed3efc7286a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);