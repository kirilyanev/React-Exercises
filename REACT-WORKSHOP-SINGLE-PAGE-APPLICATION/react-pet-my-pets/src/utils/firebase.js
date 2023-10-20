import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAtsMc6GaJIUBnXzHbvyuyZR9hCgDwiCV0",
    authDomain: "react-my-pets-a85f3.firebaseapp.com",
    projectId: "react-my-pets-a85f3",
    storageBucket: "react-my-pets-a85f3.appspot.com",
    messagingSenderId: "152834370459",
    appId: "1:152834370459:web:a6073f407f1c3cc345cf3e"
};

if(!firebase.getApps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();