import React from 'react';
import './AddGoalForm.css';

class AddGoalForm extends React.Component {
	constructor() {
		super();
		this.createGoal = this.createGoal.bind(this);
	}

	createGoal(event) {
		event.preventDefault();
		const goal = { //what else does goal need?
			name: this.name.value,
			description: this.description.value,
			stars: 0
		}
		this.props.addGoal(goal);
		this.goalForm.reset();
	}

	render() {
		return (
			<form ref={(input) => {this.goalForm = input}} className="add-goal" onSubmit={(e) => this.createGoal(e)}>
				<input ref={(input) => {this.name = input}} type="text" placeholder="Have a new goal?" />
				<textarea ref={(input) => {this.description = input}} placeholder="Additional details" />
				<button type="submit">Add Goal</button>
			</form>
		)
	}
}

export default AddGoalForm;


/*
Name, Description/Details,
 Repeat (Daily, Weekly, Monthly, Time of Day, Mon/Tues),
	Difficulty, Stars (default=3), Streaks? Time created, time finished?
Goals?
*/