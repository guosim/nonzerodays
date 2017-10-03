import React from 'react';
import ReactStars from 'react-stars';
import Select from 'react-select';
import './AddTaskForm.css';


class AddTaskForm extends React.Component {
	constructor() {
	super();
	this.createTask = this.createTask.bind(this);
	this.newDifficulty = this.newDifficulty.bind(this);
	}

	createTask(event) {
		event.preventDefault();
		const task = {
				name: this.name.value,
				description: this.description.value,
				difficulty: this.difficulty.value || 3,
				repeat: this.repeat.value,
				complete: "incomplete",
				streak: 0,
				inGoals: {}
		}
		this.props.addTask(task);
		this.taskForm.reset();
		this.difficulty.value = 3;
	}

	newDifficulty(difficulty) {
		this.difficulty.value = difficulty;
	}

	render() { //look at docs for complete/incomplete
		return (
			<form ref={(input) => {this.taskForm = input}} className="add-task" onSubmit={(e) => this.createTask(e)}>
				<span className="task-name">Task Name: </span>
				<input ref={(input) => {this.name = input}} className="add-task-name" type="text" placeholder="Add a task.." required />
				<span className="task-description">Task Description: </span>
				<textarea ref={(input) => {this.description = input}} className="add-task-description" placeholder="Additional details" />
				<div className="add-task-row">
					<span className="task-difficulty">Difficulty: </span>
					<ReactStars
						ref={(input) => {this.difficulty = input}}
						count={5}
						value={3}
						size={24}
						half={false}
						color2={'#ffd700'} 
						onChange={(e) => this.newDifficulty(e)} />
				</div>
				<div className="add-task-row">
					<span className="task-repeat"><i className="fa fa-repeat"></i> Repeat: </span>
					<select ref={(input) => {this.repeat = input}} className="add-task-repeat">
						<option value="repeat-daily">
							Daily
						</option>
						<option value="repeat-weekly">
							Weekly
						</option>
						<option value="repeat-monthly">
							Monthly
						</option>
					</select>
				</div>
				<button type="submit" className="add-task-submit">Add Task</button>
			</form>
		)
	}
}

export default AddTaskForm;
