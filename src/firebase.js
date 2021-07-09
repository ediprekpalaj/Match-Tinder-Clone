import firebase from "firebase";

const firebaseConfig = {
   //your keys here
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
