import React from 'react';
import './App.css';
import NavBar from './NavBar.js';

class App extends React.Component {
  render() {
    return (
	  <div className="nonzerodays">
		<NavBar />
		{this.props.children}
	  </div>
    )
  }
}

export default App;
