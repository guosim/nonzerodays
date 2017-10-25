import React from 'react';
import PropTypes from 'prop-types';
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
			hasTasks: this.state.tasks || []
		}
		this.props.addGoal(goal);
		this.goalForm.reset();
		this.setState({tasks: ''});
	}

	handleSelectChange(tasks) {
		this.setState({ tasks });
	}

	render() {
		return (
			<form ref={(input) => {this.goalForm = input}} className="add-goal" onSubmit={(e) => this.createGoal(e)}>
				<span className="goal-name-span">Goal Name</span>
				<input ref={(input) => {this.name = input}} className="add-goal-name" type="text" required placeholder="Dream big!" />
				<span className="goal-description-span">Goal Description </span>
				<textarea ref={(input) => {this.description = input}} className="add-goal-description" placeholder="Additional details" />
				<span className="select-tasks-span">Tasks </span>
				<Select
					className="add-goal-tasks"
					value={this.state.tasks}
					closeOnSelect={false}
					options={
						Object
							.keys(this.props.tasks)
							.map(x => ( {value:x, label:this.props.tasks[x].name} ))
					}
					onChange={this.handleSelectChange}
					multi
					placeholder="Achieve your goal!"
				/>
				<button type="submit" className="add-goal-submit">Add Goal</button>
			</form>
		)
	}
}

AddGoalForm.propTypes = {
	addGoal: PropTypes.func.isRequired,
	tasks: PropTypes.object.isRequired
}

export default AddGoalForm;
//time created - add to history?