import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';
class Login extends React.Component {
	render() {
		return (
			<div className="loginsignup-flex">
				<form className="loginsignup">
					<h2 className="loginsignup-header">Log In</h2>
					<span className="username-span">Username</span>
					<input ref={(input) => {this.username = input}} className="loginsignup-username" type="text" required />
					<span className="password-span">Password</span>
					<input ref={(input) => {this.username = input}} className="loginsignup-password" type="text" required />
					<button type="submit" className="loginsignup-submit">Log In</button>
				</form>
				<Link to="/signup" className="signup-link">Don't have an account? Click to sign up!</Link>
			</div>
		)
	}
}

export default Login;