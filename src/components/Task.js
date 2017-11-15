import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { formatTimeAgo } from '../helpers.js';
import './Task.css';

class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
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

	openModal() {
		this.setState({isModalOpen: true});
	}

	closeModal() {
		this.setState({isModalOpen: false});
	}

	render() {
		const { details, index } = this.props;
		const complete = formatTimeAgo(this.state.current_time - details.complete[details.complete.length - 1]) || "Incomplete";
		const disabled = isComplete ? true : false;


		let modalStyle = {
			position:'absolute',
			top:'50%',
			left:'50%',
			transform:'translate(-50%, -50%)',
			zIndex:'999',
			background:'#fff'
		}

		let backdropStyle = {
			position: 'absolute',
			width:'100%',
			height:'100%',
			top:'0px',
			left:'0px',
			zIndex:'998',
			background:'rgba(0,0,0,.3)'
		}
		
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
					<button onClick={() => this.props.completeTask(index)} className="complete-task" disabled={ disabled } >{ complete }</button>
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
