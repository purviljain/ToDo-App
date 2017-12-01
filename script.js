import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main';

var taskslist=["Drink Water","Sleep well","Play and learn"];

ReactDOM.render(
	<Todo tasks={taskslist}/>
	,document.getElementById('firstapp')
);