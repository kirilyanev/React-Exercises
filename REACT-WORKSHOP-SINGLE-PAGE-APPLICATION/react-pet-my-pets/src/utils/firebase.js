import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAtsMc6GaJIUBnXzHbvyuyZR9hCgDwiCV0",
    authDomain: "react-my-pets-a85f3.firebaseapp.com",
    projectId: "react-my-pets-a85f3",
    storageBucket: "react-my-pets-a85f3.appspot.com",
    messagingSenderId: "152834370459",
    appId: "1:152834370459:web:a6073f407f1c3cc345cf3e"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('Logged In:');
        console.log(user);
    } else {
        console.log('Logged Out:');
    }
});

export default firebase;

export const auth = firebase.auth();