// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "portfolio-messages-21562.firebaseapp.com",
  projectId: "portfolio-messages-21562",
  storageBucket: "portfolio-messages-21562.appspot.com",
  messagingSenderId: "545069461925",
  appId: "1:545069461925:web:569181079eca746a34784c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function sendMessage(message) {
  try {
    const timestamp = Date.now(); // Obtener el timestamp en milisegundos
    const date = new Date(timestamp); // Crear un objeto Date a partir del timestamp
    const createdAt = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

    const docRef = await addDoc(collection(db, "messages"), {
      ...message,
      createdAt,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
