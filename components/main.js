import React from 'react';
import {AddNewTask} from './addtask';
import {ToDoAppList} from './applist';

export class Todo extends React.Component{
	constructor(props){
		super();
		this.state={tasks: props.tasks};
		this.updateList=this.updateList.bind(this);
		this.removeTask=this.removeTask.bind(this);
	}
	getInitialState(){
		return{editing: false}
	}
	updateList(text){
		var updatedTasks=this.state.tasks;
		updatedTasks.unshift(text);
		this.setState({tasks:updatedTasks});
	}
	removeTask(text){
		var updatedTasks=this.state.tasks;
		updatedTasks.splice(updatedTasks.indexOf(text),1);
		this.setState({tasks:updatedTasks});

	}
	editTask(text){
		var sample= indexOf(text);
		this.setState({editing: true});
	}
	saveTask(){
		this.setState({editing:false});
	}
	render(){
		return(
			<div>
			<h1>ToDo app</h1>
			<AddNewTask updateList={this.updateList}/>
			<ToDoAppList tasks={this.state.tasks} remove={this.removeTask} edit={this.editTask} save={this.saveTask}/>
			</div>
			);
	}
}