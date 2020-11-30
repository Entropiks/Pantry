import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAYExerSdN_15tq0SNUZbtcLjDV4hiUTh4",
  authDomain: "pantry-3543e.firebaseapp.com",
  databaseURL: "https://pantry-3543e.firebaseio.com",
  projectId: "pantry-3543e",
  storageBucket: "pantry-3543e.appspot.com",
  messagingSenderId: "326295860357",
  appId: "1:326295860357:web:d929932d147532c8ea25ec"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;