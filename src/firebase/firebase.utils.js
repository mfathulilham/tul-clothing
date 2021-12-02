import { initializeApp } from 'firebase/app'
// import {firestore} from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNFcRfG0InMFZag1qotuZySOwQaEf_gxM",
    authDomain: "tuls-db.firebaseapp.com",
    projectId: "tuls-db",
    storageBucket: "tuls-db.appspot.com",
    messagingSenderId: "1030408566320",
    appId: "1:1030408566320:web:156d32e869638d502c9ff5"
  };

const app = initializeApp(config);
export const auth = getAuth(app);
// export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    });
}

export const signout = () => {
  signOut(auth)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    });
}

// export default firebase;