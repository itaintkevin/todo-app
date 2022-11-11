import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUdUe_D8afOV4tLtD0JoI4qVUzzJfncmU",
  authDomain: "todo-app-16e21.firebaseapp.com",
  projectId: "todo-app-16e21",
  storageBucket: "todo-app-16e21.appspot.com",
  messagingSenderId: "337657605126",
  appId: "1:337657605126:web:326317d77f20ebe0f9e787"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);