import React from 'react';
import Select from 'react-select';
import './AddGoalForm.css';

class AddGoalForm extends React.Component {
	constructor() {
		super();
		this.createGoal = this.createGoal.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.state = {tasks: ''};
	}

	createGoal(event) {
		event.preventDefault();
		const goal = {
			name: this.name.value,
			description: this.description.value,
			stars: 0,
			hasTasks: this.state.tasks
		}
		this.props.addGoal(goal);
		this.goalForm.reset();
		this.setState({tasks: ''});
	}

	handleSelectChange(tasks) {
		this.setState({ tasks });
	}

	render() {
		const options = [
			{ value: 'one', label: 'One' },
			{ value: 'two', label: 'Two' },
			{ value: 'three', label: 'Three' }
		];
		return (
			<form ref={(input) => {this.goalForm = input}} className="add-goal" onSubmit={(e) => this.createGoal(e)}>
				<span className="goal-name-span">Goal Name *</span>
				<input ref={(input) => {this.name = input}} className="add-goal-name" type="text" required placeholder="Dream big!" />
				<span className="goal-description-span">Goal Description </span>
				<textarea ref={(input) => {this.description = input}} className="add-goal-description" placeholder="Additional details" />
				<span className="select-tasks-span">Tasks </span>
				<Select
					className="add-goal-tasks"
					value={this.state.tasks}
					closeOnSelect={false}
					options={options}
					onChange={this.handleSelectChange}
					multi
					placeholder="Achieve your goal!"
				/>
				<button type="submit" className="add-goal-submit">Add Goal</button>
			</form>
		)
	}
}

export default AddGoalForm;


/*
Name, Description/Details,
	Difficulty, Time created, time finished?
Goals?
*/