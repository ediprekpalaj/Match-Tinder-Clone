import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZXB_X5qfFQsYlZDx384oRmotZsR6MI38",
    authDomain: "match-tinder-clone.firebaseapp.com",
    projectId: "match-tinder-clone",
    storageBucket: "match-tinder-clone.appspot.com",
    messagingSenderId: "251574016394",
    appId: "1:251574016394:web:e9c41623923f2753195073",
    measurementId: "G-F46ZJ6LSDB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;