import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Versão completa

const firebaseConfig = {
  apiKey: "AIzaSyAiiV7SHUk14tV7C26ycSvfkd2kCgS9MfQ",
  authDomain: "mini-blog-dc5e1.firebaseapp.com",
  projectId: "mini-blog-dc5e1",
  storageBucket: "mini-blog-dc5e1.appspot.com",
  messagingSenderId: "971381418476",
  appId: "1:971381418476:web:91c7895e280fd4e618b8c9"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Criando instâncias dos serviços
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
