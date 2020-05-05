import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

// Llave de firebase para poder acceder a la base de datos que tenemos en ella 
const firebaseConfig = {
    apiKey: "AIzaSyBqFSqkJzy9NGR4I_qg_MqQpZkOLEziKeE",
    authDomain: "red-social-react-9c148.firebaseapp.com",
    databaseURL: "https://red-social-react-9c148.firebaseio.com",
    projectId: "red-social-react-9c148",
    storageBucket: "red-social-react-9c148.appspot.com",
    messagingSenderId: "131026283019",
    appId: "1:131026283019:web:8f7fb9e61ea7c0f931b50e",
    measurementId: "G-1NRQKZB59F"
};

firebase.initializeApp(firebaseConfig);

 let db= firebase.firestore(); // Conectamos firebase con firestore
  export {db, firebase}