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
		const goalsWithTask = tasks[`task${timestamp}`].inGoals
		goalsWithTask.map(key => (key.hasTasks.push(task)))  //WORKS but one has label value other has whole task
		this.setState({tasks: tasks,
									 goals: goals});
	}

	addGoal(goal) {
		const tasks = {...this.state.tasks};
		const goals = {...this.state.goals};
		const timestamp = Date.now();
		goals[`goal${timestamp}`] = goal;
		const tasksInGoal = goals[`goal${timestamp}`].hasTasks
		tasksInGoal.map(key => (key.inGoals.push(goal)))
		this.setState({tasks: tasks,
									 goals: goals});
	}

//complete, edit, delete, add everything to history after
	tgLink(task, goal) { //xor between all goal and current goal to display
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
