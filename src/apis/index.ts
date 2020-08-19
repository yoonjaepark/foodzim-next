import firebase from 'firebase/app'
import "firebase/firestore"
console.log(process.env)

const config = {
    apiKey: "AIzaSyB2dAKP_6Jy8rOuexQtrLAXhxoitaKNaTg",
    authDomain: "sample-project-3348f.firebaseapp.com",
    databaseURL: "https://sample-project-3348f.firebaseio.com",
    projectId: "sample-project-3348f",
    storageBucket: "sample-project-3348f.appspot.com",
    messagingSenderId: "1057213439021",
    appId: "1:1057213439021:web:88a647b81170576163eca4",
    measurementId: "G-M660KKCFE0"
};
try {
    firebase.initializeApp(config);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
    }
}

const firestore = firebase.firestore();

const databaseRef = firestore;
const todosRef = databaseRef.collection("todo")
export { firebase, firestore, todosRef };
