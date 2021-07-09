import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD06SS8yfkpMw7C2zXBpI1fgr8mJYBg87c",
    authDomain: "crown-clothing-db-6f477.firebaseapp.com",
    projectId: "crown-clothing-db-6f477",
    storageBucket: "crown-clothing-db-6f477.appspot.com",
    messagingSenderId: "550131437287",
    appId: "1:550131437287:web:b39cee8e7cc05358601c42",
    measurementId: "G-BLKSF54G2B"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;