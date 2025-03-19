import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAiiV7SHUk14tV7C26ycSvfkd2kCgS9MfQ",
  authDomain: "mini-blog-dc5e1.firebaseapp.com",
  projectId: "mini-blog-dc5e1",
  storageBucket: "mini-blog-dc5e1.firebasestorage.app",
  messagingSenderId: "971381418476",
  appId: "1:971381418476:web:91c7895e280fd4e618b8c9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}