import React from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm.js';
import AddGoalForm from './AddGoalForm.js';
import Task from './Task.js';

class App extends React.Component {
	constructor() {
		super();
		this.addTask = this.addTask.bind(this);
		this.addGoal = this.addGoal.bind(this);
		this.tgLink = this.tgLink.bind(this);

		this.state = {
			tasks: {},
			goals: {},
			timeline: {}
		};
	}

	addTask(task) {
		const tasks = {...this.state.tasks};
		const timestamp = Date.now();
		tasks[`task${timestamp}`] = task;
		this.setState({tasks});
	}

	addGoal(goal) {
		const goals = {...this.state.goals};
		const timestamp = Date.now();
		goals[`goal${timestamp}`] = goal;
		this.setState({goals});
	}
//complete, edit, delete, add everything to history after
	tgLink(task, goal) { //xor between all goal and current goal to display
		const tasks = {...this.state.tasks};
		const goals = {...this.state.goals};
		this.setState({tasks: tasks,
									 goals: goals});
	}

	render() {
		return (
			<div className="nonzerodays">
				<AddTaskForm addTask={this.addTask} goals={this.state.goals} />
				<AddGoalForm addGoal={this.addGoal} tasks={this.state.tasks} />
				<ul className="tasks">
					{
						Object
							.keys(this.state.tasks)
							.map(key => <Task key={key} details={this.state.tasks[key]}/>)
					}
				</ul>
			</div>
		)
	}
}

export default App;
