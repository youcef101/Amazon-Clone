import firebase from 'firebase'
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD8akcHb8Ql3m5z6CDWz8TZ5-w-txjpgW8",
    authDomain: "clone-56f3f.firebaseapp.com",
    projectId: "clone-56f3f",
    storageBucket: "clone-56f3f.appspot.com",
    messagingSenderId: "415066810703",
    appId: "1:415066810703:web:04c3795090869c674a7d3a",
    measurementId: "G-MHSPX1Y7XZ"
});
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;