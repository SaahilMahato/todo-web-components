import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3pf6trIUnJUqk4XwmdqW_gXRCDw8lj9s",
    authDomain: "todo-firestore-f3924.firebaseapp.com",
    projectId: "todo-firestore-f3924",
    storageBucket: "todo-firestore-f3924.appspot.com",
    messagingSenderId: "157722766943",
    appId: "1:157722766943:web:4e6a328f43c833d608f5ea",
    measurementId: "G-KC6LX7VHN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {
    db,
    collection, 
    addDoc
}