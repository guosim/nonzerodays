import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';

class SignUp extends React.Component {
	render() {
		return (
			<div className="loginsignup-flex">
				<form className="loginsignup">
					<h2 className="loginsignup-header">Sign Up</h2>
					<span className="username-span">Username</span>
					<input ref={(input) => {this.username = input}} className="loginsignup-username" type="text" required />
					<span className="password-span">Password</span>
					<input ref={(input) => {this.password = input}} className="loginsignup-password" type="text" required />
					<button type="submit" className="loginsignup-submit">Sign Up</button>
				</form>
				<Link to="/login" className="login-link">Already have an account? Login here.</Link>
			</div>
		)
	}
}

export default SignUp;