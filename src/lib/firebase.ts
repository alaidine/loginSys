import * as firebase from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const config = {
    apiKey: "AIzaSyDx7MdaXYcR8ICSgznjyP9cyRvC24OI69Y",
    authDomain: "loginsys-9ced2.firebaseapp.com",
    projectId: "loginsys-9ced2",
    storageBucket: "loginsys-9ced2.appspot.com",
    messagingSenderId: "537958675505",
    appId: "1:537958675505:web:643f7458d4ab61429c1110",
    measurementId: "G-VJFMRWGSJT"
}

firebase.initializeApp(config)

export function Register(email: string, password: string) { // create a user
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
    .then(function(result: any) {
        console.log('Successfully created user: ', result.user.uid)
    })
    .then((userCredential) => {
        const user = userCredential
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
    })
}

export function Login(email: string, password: string) { // sign in
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then(function(result: any) {
        console.log('Successfully signed in user: ', result.user.uid)
    })
    .then((userCredential) => {
        const user = userCredential
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
    })
}

export function Logout() {
    const auth = getAuth()
    signOut(auth).then(() => {
        console.log("signout successfully")
    })
}
