import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';
import firebase from '../firebase.js';

class Signup extends React.Component {
	constructor() {
		super();
		this.makeUser = this.makeUser.bind(this);
		this.state = {
			error: ""
		};
	}

	makeUser(event) {
		event.preventDefault();
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.email.value, this.password.value)
			.catch(function(error) {
				console.log(error.message);
			});
		this.password.value = '';
		this.verify.value = '';

		firebase.auth().onAuthStateChanged(function(user) {
			window.user = user;
			console.log(window.user);
		});
	}

	render() {
		return (
			<div className="loginsignup-flex">
				<form ref={(input) => {this.signupForm = input}} className="loginsignup" onSubmit={(e) => this.makeUser(e)}>
					<h3 className="loginsignup-header">Create A New Account</h3>
					<p className="errorMessage"></p> 
					<input ref={(input) => {this.username = input}} className="loginsignup-field" type="text" placeholder="username" required autoFocus={true} />
					<input ref={(input) => {this.password = input}} className="loginsignup-field" type="password" placeholder="password" required />
					<input ref={(input) => {this.verify = input}} className="loginsignup-field" type="password" placeholder="verify password" required />
					<input ref={(input) => {this.email = input}} className="loginsignup-field" type="text" placeholder="email" />
					<button type="submit" className="loginsignup-submit">Sign Up</button>
					<Link to="/login" className="loginsignup-link">Already have an account? Login here.</Link>
				</form>
			</div>
		)
	}
}

export default Signup;