const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
const Rebase = require('re-base');

const config = {
		apiKey: "AIzaSyDzpH5xdKYtGATRIwOhPf3XAKdtL-DpQVA",
		authDomain: "non-zero-days.firebaseapp.com",
		databaseURL: "https://non-zero-days.firebaseio.com",
		projectId: "non-zero-days"
};

firebase.initializeApp(config);
const auth = firebase.auth();
const base = Rebase.createClass(firebase.database());


export function createUser(email, password) {
	auth
		.createUserWithEmailAndPassword(email, password)
		.catch((error) =>	{ console.log(error.message); });
}

export function loginEmail(email, password) {
	auth
		.signInWithEmailAndPassword(email, password)
		.catch((error) => { console.log(error.message); });
}

export function signOut() {
	auth
		.signOut()
		.catch((error) => {console.log(error.message); });
}

export function onUserChange() {
	auth
		.onAuthStateChanged();
}

export function currentUser() {
	return auth.currentUser;
}

export default base;