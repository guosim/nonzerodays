import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component { //streak and user
	render() {
		return (
		 	<nav className="navbar">
		 		<ul>
			 		<li className="logo"><Link to="/">Non Zero Days</Link></li>
			 		<li><Link to="/">Home</Link></li>
			 		<li><Link to="/about">About</Link></li>
			 		<li><Link to="/login">Log&nbsp;In</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;