import React from 'react';
import ReactStars from 'react-stars';
import './Task.css';

//Name, Description/Details, Repeat (Daily, Weekly, Monthly, Time of Day, Mon/Tues), Difficulty, Stars (default=3), Streaks? Time created, time finished?
//Goals?

class Task extends React.Component {
	render() {
		const { details } = this.props;
		const complete = details.complete === "complete";
		const buttonText = complete ? 'Done' : 'Unfinished';

		return (
			<li className="task">
				<h3 className="task-name">
					{details.name}
				</h3>

				<ReactStars
					className="taskDifficulty"
					count={5}
					value={details.difficulty}
					size={24}
					half={false}
					color2={'#ffd700'} 
					edit={false} />

				<p className="taskDescription">
					{details.description}
				</p>

			</li>
		)
	}
}

export default Task;
