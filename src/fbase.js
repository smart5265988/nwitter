import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCoVUqKhO3_Q25UQ8yFdPKpWM3mY4cNIrs',
  authDomain: 'nwitter-dc4b2.firebaseapp.com',
  projectId: 'nwitter-dc4b2',
  storageBucket: 'nwitter-dc4b2.appspot.com',
  messagingSenderId: '305977935940',
  appId: '1:305977935940:web:e26f33f131bf851048d411',
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
