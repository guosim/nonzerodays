import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { timeSince } from '../helpers.js';
import './Task.css';

class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			button_text: timeSince(this.props.details.complete[this.props.details.complete.length - 1]) || "Incomplete",
			current_time: new Date()
		};
	}

	componentDidMount() {
		this.timer = setInterval(
			() => this.setState({current_time: new Date()}),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		const { details, index } = this.props;
		return (
			<li className="task">
				<i className="fa fa-pencil edit"></i>
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
				<button onClick={() => this.props.completeTask(index)} className="complete-task" >{(this.state.current_time - details.complete[details.complete.length - 1]) || "Incomplete"}</button>
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
