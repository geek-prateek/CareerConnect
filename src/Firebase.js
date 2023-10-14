import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJdILkTOZqhA-ey3x7EgdqYlQZlUyalOc",
    authDomain: "careerconnect-43100.firebaseapp.com",
    projectId: "careerconnect-43100",
    storageBucket: "careerconnect-43100.appspot.com",
    messagingSenderId: "522977800932",
    appId: "1:522977800932:web:c45d8054b2af1a0bfcb2f1",
    measurementId: "G-9NMFGJ6QQB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };