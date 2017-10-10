import React from 'react';
import ReactStars from 'react-stars';
import Select from 'react-select';
import './AddTaskForm.css';


class AddTaskForm extends React.Component {
	constructor() {
	super();
	this.createTask = this.createTask.bind(this);
	this.newDifficulty = this.newDifficulty.bind(this);
	this.selectChangeGoals = this.selectChangeGoals.bind(this);
	this.selectChangeRepeat = this.selectChangeRepeat.bind(this);
	this.state = {goals:'', repeat:''};
	}

	createTask(event) { //add this task to goal
		event.preventDefault();
		const task = {
				name: this.name.value,
				description: this.description.value,
				difficulty: this.difficulty.value || 3,
				inGoals: this.state.goals || [], //want whole goal not just label! fix later
				repeat: this.state.repeat,
				complete: "incomplete",
				streak: 0
		}
		this.props.addTask(task);
		this.taskForm.reset();
		this.difficulty.value = 3;
		this.setState({goals:'', repeat:''});
	}

	selectChangeGoals(goals) {
		this.setState({ goals });
	}

	selectChangeRepeat(repeat) {
		this.setState({ repeat });
	}

	newDifficulty(difficulty) {
		this.difficulty.value = difficulty;
	}

	render() {
		const repeatOptions = [
			{ value: 'monday,tuesday,wednesday,thursday,friday,saturday,sunday', label: 'Daily' },
			{ value: 'monday', label: 'Monday' },
			{ value: 'tuesday', label: 'Tuesday' },
			{ value: 'wednesday', label: 'Wednesday' },
			{ value: 'thursday', label: 'Thursday' },
			{ value: 'friday', label: 'Friday' },
			{ value: 'saturday', label: 'Saturday' },
			{ value: 'sunday', label: 'Sunday' }
		];
		return (
			<form ref={(input) => {this.taskForm = input}} className="add-task" onSubmit={(e) => this.createTask(e)}>
				<span className="task-name-span">Task Name *</span>
				<input ref={(input) => {this.name = input}} className="add-task-name" type="text" placeholder="Add a task.." required />
				<span className="task-description-span">Task Description </span>
				<textarea ref={(input) => {this.description = input}} className="add-task-description" placeholder="Additional details" />
				<span className="select-goals-span">Goals </span>
				<Select
					className="add-task-goals"
					value={this.state.goals}
					closeOnSelect={true}
					options={ 
						Object
							.keys(this.props.goals)
							.map(x => ( {value:x, label:this.props.goals[x].name} ))
					} 
					onChange={this.selectChangeGoals}
					multi
				/>
				<span className="task-repeat-span">Repeat <i className="fa fa-repeat"></i></span>
				<Select 
					className="add-task-repeat"
					value={ this.state.repeat }
					closeOnSelect={true}
					options={repeatOptions}
					onChange={this.selectChangeRepeat}
					multi
					simpleValue
					/>

				<div className="add-task-row">
					<span className="task-difficulty-span">Difficulty: </span>
					<ReactStars
						ref={(input) => {this.difficulty = input}}
						count={5}
						value={3}
						size={24}
						half={false}
						color2={'#ffd700'} 
						onChange={(e) => this.newDifficulty(e)} />
				</div>

				<button type="submit" className="add-task-submit">Add Task</button>
			</form>
		)
	}
}

export default AddTaskForm;
