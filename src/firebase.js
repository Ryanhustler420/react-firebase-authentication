import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "abc-_GnNGiORf4",
  authDomain: "appname.firebaseapp.com",
  projectId: "appname",
  storageBucket: "appname.appspot.com",
  messagingSenderId: "6567576565765",
  appId: "1:6567576565765:web:15673512673hsjgdadsa",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
