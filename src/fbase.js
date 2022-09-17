import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxA8hDJ1yyFOIv1Uh_I__JHJdm6N8RAso",
  authDomain: "anonymouse-b3f4b.firebaseapp.com",
  projectId: "anonymouse-b3f4b",
  storageBucket: "anonymouse-b3f4b.appspot.com",
  messagingSenderId: "57725630452",
  appId: "1:57725630452:web:c2566c3ca1353c21a66ba1"
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const firebaseInstance = firebase;