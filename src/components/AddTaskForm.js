import React from 'react';
import ReactStars from 'react-stars';

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
				difficulty: this.difficulty.value,
				repeat: this.repeat.value,
				complete: "incomplete",
				streak: 0,
				inGoals: {}
		}
		this.props.addTask(task);
		this.taskForm.reset();
		console.log(task);
	}

	newDifficulty(difficulty) {
		console.log(difficulty);
		this.difficulty.value = difficulty;
	}

	render() { //look at docs for complete/incomplete
		return (
			<form ref={(input) => {this.taskForm = input}} className="add-task" onSubmit={(e) => this.createTask(e)}>
				<span className="task-span">Task Name: </span>
				<input ref={(input) => {this.name = input}} className="add-task-name" type="text" placeholder="Add a task.." required />
				<span className="task-span">Task Description: </span>
				<textarea ref={(input) => {this.description = input}} className="add-task-description" placeholder="Additional details" />
				<div className="row-wrapper">
					<span className="difficulty">Difficulty: </span>
					<ReactStars
						ref={(input) => {this.difficulty = input}}
						count={5}
						value={3}
						size={30}
						half={false}
						color2={'#ffd700'} 
						onChange={(e) => this.newDifficulty(e)} />
				</div>
				<div className="row-wrapper">
					<span>Repeat: </span>
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


/*
Name, Description/Details,
 Repeat (Daily, Weekly, Monthly, Time of Day, Mon/Tues),
	Difficulty, Stars (default=3), Time created, 
Goals?
*/