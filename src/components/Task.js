import React from 'react';
import './Task.css';

//Name, Description/Details, Repeat (Daily, Weekly, Monthly, Time of Day, Mon/Tues), Difficulty, Stars (default=3), Streaks? Time created, time finished?
//Goals?

class Task extends React.Component {
	render() {
		const { details } = this.props;
		const complete = (details.complete === "complete");

		return (
			<li className="task">
				<h3 className="taskName">
					{details.name}
				</h3>
				<span className="taskDifficulty">
					{details.difficulty}
				</span>
				<p className="taskDescription">
					{details.description}
				</p>
				<div className="buttons">
				 <button className="complete" >
						<i className="fa fa-check 2x"></i>
				 </button>
				 <button className="delete" ><i className="fa fa-times"></i></button>
				</div>
			</li>
		)
	}
}

export default Task;
