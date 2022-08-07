// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoI6vG6c4PIU_ZJ0DeB1REVbmyviJbehU",
  authDomain: "tienda-videojuegos-376bc.firebaseapp.com",
  projectId: "tienda-videojuegos-376bc",
  storageBucket: "tienda-videojuegos-376bc.appspot.com",
  messagingSenderId: "1031948092264",
  appId: "1:1031948092264:web:30a5fa30ac43c532c54cdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);