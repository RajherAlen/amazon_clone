import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxqwbwSbxVSJop-rXF-PTkUNCCO33FsnE",
  authDomain: "e-clone-8b12a.firebaseapp.com",
  databaseURL: "https://e-clone-8b12a.firebaseio.com",
  projectId: "e-clone-8b12a",
  storageBucket: "e-clone-8b12a.appspot.com",
  messagingSenderId: "671256568207",
  appId: "1:671256568207:web:ba1239442b4affe6ebebfa",
  measurementId: "G-NYL0R5PJH9",
});

// const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
