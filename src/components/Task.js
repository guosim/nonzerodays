import React from 'react';
import './Task.css';

class Task extends React.Component {
  render() {
    return (
      <div className="task">
      	<p>This is a task!</p>
        <div className="buttons">
	       <button className="complete" onClick=""><i className="fa fa-check"></i></button>
	       <button className="delete" onClick=""><i className="fa fa-times"></i></button>
      	</div>
      </div>
    )
  }
}

export default Task;
