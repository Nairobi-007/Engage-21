import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyD6W4hjTZRtOQPgY_M9TbwzGlL4waCKOV0",
    authDomain: "engage-b5542.firebaseapp.com",
    projectId: "engage-b5542",
    storageBucket: "engage-b5542.appspot.com",
    messagingSenderId: "406537230763",
    appId: "1:406537230763:web:7cf66335ecaf235347daee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;