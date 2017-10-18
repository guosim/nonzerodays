import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import './Task.css';

//Name, Description/Details, Repeat (Daily, Weekly, Monthly, Time of Day, Mon/Tues), Difficulty, Stars (default=3), Streaks? Time created, time finished?
//Goals?

class Task extends React.Component {
	render() {
		const { details, index } = this.props;
		const complete = details.complete === "complete";
		const buttonText = complete ? 'Done!' : 'Incomplete';

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
				<button onClick={() => this.props.completeTask(index)} disabled={complete}>{buttonText}</button>
			</li>
		)
	}
}

Task.propTypes = {
	index: PropTypes.string.isRequired,
	details: PropTypes.object.isRequired,
	completeTask: PropTypes.func.isRequired
}

export default Task;
