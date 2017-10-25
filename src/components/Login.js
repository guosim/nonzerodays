import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';

class Login extends React.Component {

	render() {
		return (
			<div className="loginsignup-flex">
				<form className="loginsignup">
					<h3 className="loginsignup-header">Log In</h3>
					<input ref={(input) => {this.username = input}} className="loginsignup-field" type="text" placeholder="username or email" required autoFocus={true} />
					<input ref={(input) => {this.password = input}} className="loginsignup-field" type="text" placeholder="password" required />
					<button type="submit" className="loginsignup-submit">Log In</button>
					<Link to="/signup" className="loginsignup-link">Don't have an account? Sign up here!</Link>
				</form>
			</div>
		)
	}
}

export default Login;