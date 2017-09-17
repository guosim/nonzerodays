import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import './index.css';
import App from './components/App.js';
import About from './components/About.js';
import Login from './components/Login.js';
import NoMatch from './components/NoMatch.js';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Router>
    <div>
      {/*Can put navbar here*/}
      <Switch>
	    <Route path="/" exact component={App} />
		<Route path="/about" component={About} />
	    <Route path="/login" component={Login} />
	    <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

render(<Root />, document.getElementById('root'));
registerServiceWorker();
