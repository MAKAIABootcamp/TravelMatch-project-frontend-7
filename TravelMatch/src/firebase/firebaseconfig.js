import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDisM4yXL7A_nDMnhuCkGx8QbRnn8gy4mI",
  authDomain: "travelmatch-53feve7.firebaseapp.com",
  projectId: "travelmatch-53feve7",
  storageBucket: "travelmatch-53feve7.appspot.com",
  messagingSenderId: "986000910844",
  appId: "1:986000910844:web:7fc0bd65fed3efc7286a79"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); //Se inicializa el servicio de autenticación de Firebase
export const dataBase = getFirestore(app); //Se inicializa el servicio de cloud Firestore
export const googleProvider = new GoogleAuthProvider();
