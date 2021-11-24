import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBaEu18pbIP-GcrLMzWIgj9wxR_Eci7Ng4",
  authDomain: "robinhood-c595c.firebaseapp.com",
  projectId: "robinhood-c595c",
  storageBucket: "robinhood-c595c.appspot.com",
  messagingSenderId: "717485834898",
  appId: "1:717485834898:web:7bf1eed16c0cd467f7dc4b"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };