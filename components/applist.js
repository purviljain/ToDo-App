import React from 'react';
import {ApplistHeader} from './applist-header';


export class ToDoAppList extends React.Component{
	constructor(){
		super();
		this.remove=this.remove.bind(this);
	}
	remove(elem){
		var value=elem.target.parentNode.querySelector('span').innerText;
		this.props.remove(value);
	}
	edit(elem){
		var value=elem.target.parentNode.querySelector('span').innerText;
		this.props.edit(value);
	}
	render(){
		
			var items=this.props.tasks.map((elem,i)=> {
				return <li key={i}><span>{elem}</span>
				<button onClick={this.edit}>Edit</button>
				<button onClick={this.remove}>Remove</button></li>
			});
			return(
				<ul>
					{items}
				</ul>
				);
		
	}
}