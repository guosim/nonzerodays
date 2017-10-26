import React from 'react';
import { Link } from 'react-router-dom';
import { loginEmail } from '../firebase.js';
import './LoginSignup.css';

class Login extends React.Component {
	constructor() {
		super();
		this.login = this.login.bind(this);
	}

	login(event) {
		event.preventDefault();
		loginEmail(this.email.value, this.password.value)
		this.password.value = '';
	}

	render() {
		return (
			<div className="loginsignup-flex">
				<form ref={(input) => {this.loginForm = input}} className="loginsignup" onSubmit={(e) => this.login(e)}>
					<h3 className="loginsignup-header">Log In</h3>
					<input ref={(input) => {this.email = input}} className="loginsignup-field" type="text" placeholder="username or email" required autoFocus={true} />
					<input ref={(input) => {this.password = input}} className="loginsignup-field" type="password" placeholder="password" required />
					<button type="submit" className="loginsignup-submit">Log In</button>
					<Link to="/signup" className="loginsignup-link">Don't have an account? Sign up here!</Link>
				</form>
			</div>
		)
	}
}

export default Login;