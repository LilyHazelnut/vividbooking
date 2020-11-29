import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbm3Kf8wccKrXOjtjTihrEoup6RpP5O70",
  authDomain: "openmap7.firebaseapp.com",
  databaseURL: "https://openmap7.firebaseio.com",
  projectId: "openmap7",
  storageBucket: "openmap7.appspot.com",
  messagingSenderId: "945965660395",
  appId: "1:945965660395:web:8571b3e3148e549f0b66ae",
  measurementId: "G-4XYTZD41NS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;