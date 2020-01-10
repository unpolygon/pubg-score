import firebase from 'firebase/app';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDqTHY4zj2afSxGaPt_z9k2Rcs9YcsubcE",
    authDomain: "pubgscorecompute.firebaseapp.com",
    databaseURL: "https://pubgscorecompute.firebaseio.com",
    projectId: "pubgscorecompute",
    storageBucket: "pubgscorecompute.appspot.com",
    messagingSenderId: "449947130172",
    appId: "1:449947130172:web:6a4ad66df450343642e639",
    measurementId: "G-SR0L6FPTYS"
  };

  firebase.initializeApp(config);

  const db = firebase.firestore();

  export {
    db
  }
