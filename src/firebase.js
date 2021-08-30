import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCNzfjtSEPvmd0xljQhh_QWKe2jHGE7Sn4",
    authDomain: "clone-soyf.firebaseapp.com",
    projectId: "clone-soyf",
    storageBucket: "clone-soyf.appspot.com",
    messagingSenderId: "1025511279800",
    appId: "1:1025511279800:web:41ddb0f86d6424162b784d"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()