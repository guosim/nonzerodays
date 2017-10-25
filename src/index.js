import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import './index.css';
import 'react-select/dist/react-select.css';
import App from './components/App.js';
import About from './components/About.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import NoMatch from './components/NoMatch.js';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
	<Router>
		<div>
			<header className="navbar">
				<section>
					<Link to="/" className="logo"><img src="" alt="Non Zero Days" /></Link>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/login">Log In</Link>
					</nav>
					<div className="spacer"></div>
				</section>
			</header>

			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/about" component={About} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</Router>
)

render(<Root />, document.getElementById('root'));
registerServiceWorker();
