import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCNejDztkggFO1gNwicgQLndNDbETOmkaY",
    authDomain: "fb-clone-1950d.firebaseapp.com",
    databaseURL: "https://fb-clone-1950d.firebaseio.com",
    projectId: "fb-clone-1950d",
    storageBucket: "fb-clone-1950d.appspot.com",
    messagingSenderId: "864834224347",
    appId: "1:864834224347:web:736e7b14264a7271974cfe"
  };

  
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;