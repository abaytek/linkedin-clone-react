import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeD6vfP8nqRPlqZlvFfgJvLqAoMEswm2M",
  authDomain: "linkedin-clone-react-914bc.firebaseapp.com",
  projectId: "linkedin-clone-react-914bc",
  storageBucket: "linkedin-clone-react-914bc.appspot.com",
  messagingSenderId: "415476141719",
  appId: "1:415476141719:web:ae12cd9386df191bfba3d2",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export  { db, auth };
