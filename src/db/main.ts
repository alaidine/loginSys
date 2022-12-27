import * as firebase from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDx7MdaXYcR8ICSgznjyP9cyRvC24OI69Y',
	authDomain: 'loginsys-9ced2.firebaseapp.com',
	projectId: 'loginsys-9ced2',
	storageBucket: 'loginsys-9ced2.appspot.com',
	messagingSenderId: '537958675505',
	appId: '1:537958675505:web:643f7458d4ab61429c1110',
	measurementId: 'G-VJFMRWGSJT'
};

const app = firebase.initializeApp(config);

const auth = getAuth(app);

export async function Register(email: string, password: string) {
	// create a user
	try {
		const user = await createUserWithEmailAndPassword(auth, email, password);
		console.log(user);
	} catch (error: any) {
		console.log(error.message);
	}
}

export async function Login(email: string, password: string) {
	// sign in
	try {
		const user = await signInWithEmailAndPassword(auth, email, password);
		console.log(user);
	} catch (error: any) {
		console.log(error.message);
	}
}

export async function Logout() {
	// logout a user
	await signOut(auth);
}
