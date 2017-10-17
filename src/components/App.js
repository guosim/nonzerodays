import React from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm.js';
import AddGoalForm from './AddGoalForm.js';
import Task from './Task.js';
import Goal from './Goal.js';
import base from '../base.js';

class App extends React.Component {
	constructor() {
		super();
		this.addTask = this.addTask.bind(this);
		this.addGoal = this.addGoal.bind(this);
		this.tgLink = this.tgLink.bind(this);
		this.completeTask = this.completeTask.bind(this);

		this.state = {
			tasks: {},
			goals: {},
			timeline: {}
		};
	}

	addTask(task) {
		const tasks = {...this.state.tasks};
		const goals = {...this.state.goals};
		const timestamp = Date.now();
		tasks[`task${timestamp}`] = task;
		const goalNames = tasks[`task${timestamp}`].inGoals.map(key => (key.value)) 
		goalNames.map(key => (goals[key].hasTasks.push({value:`task${timestamp}`, label:task.name})))
		this.setState({tasks: tasks,
									 goals: goals});
	}

	addGoal(goal) {
		const tasks = {...this.state.tasks};
		const goals = {...this.state.goals};
		const timestamp = Date.now();
		goals[`goal${timestamp}`] = goal;
		const taskNames = goals[`goal${timestamp}`].hasTasks.map(key => (key.value))
		taskNames.map(key => (tasks[key].inGoals.push({value:`goal${timestamp}`, label:goal.name})))
		this.setState({tasks: tasks,
									 goals: goals});
	}

	tgLink(task, goal) {
		const tasks = {...this.state.tasks};
		const goals = {...this.state.goals};
		this.setState({tasks: tasks,
									 goals: goals});
	}

	completeTask(key) {
		const tasks = {...this.state.tasks};
		tasks[key].complete = "complete";
		this.setState({ tasks });
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
							.map(key => <Task key={key} index={key} details={this.state.tasks[key]} completeTask={this.completeTask} />)
					}
				</ul>
			</div>
		)
	}
}

export default App;
