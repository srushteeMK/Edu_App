import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAg5W0U47mGV9xP_ZbaEfcEaJIimjjIom0",
  authDomain: "harsh-24dcb.firebaseapp.com",
  projectId: "harsh-24dcb",
  storageBucket: "harsh-24dcb.appspot.com",
  messagingSenderId: "299969906412",
  appId: "1:299969906412:web:718f6c4063763d322887c9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()