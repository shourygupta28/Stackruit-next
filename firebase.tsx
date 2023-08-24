import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDU25jYSV5yeE92ko16cegHpKoA9YGyHHw",
    authDomain: "nextjs-todo-98ce6.firebaseapp.com",
    projectId: "nextjs-todo-98ce6",
    storageBucket: "nextjs-todo-98ce6.appspot.com",
    messagingSenderId: "111290950913",
    appId: "1:111290950913:web:2c852deafbc9fd027de700"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)