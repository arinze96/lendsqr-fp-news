
import { Appearance } from "react-native";
import {getAnalytics} from 'firebase/analytics';
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  getDocs,
} from "firebase/firestore";
import {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID,
  } from '@env';
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import uuid from 'react-native-uuid';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };

let Firebase = initializeApp(firebaseConfig);
  const firestoreDB = getFirestore(Firebase);
  const provider = new GoogleAuthProvider()
  const usersCollection = collection(firestoreDB, "users");
  const usersDB = doc(firestoreDB, 'users', uuid.v4());

  const auth = getAuth(Firebase)

  const setEmailAndPassword = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };

  const getUserCollection = () => {
    getDocs(usersCollection)
      .then((snapshot) => {
        let users = [];
        snapshot.docs.forEach((doc) => {
          users.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        console.log('real deal');
        console.log('current user',users, 'current user');
        console.log('real deal');
      })
      .catch((err) => {
        console.log(err);
      });
  };



  export {auth, provider,  usersCollection, usersDB, setEmailAndPassword, getUserCollection}