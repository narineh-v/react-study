import React from 'react';
//import Radium from 'radium';
import classes from './Person.css';

const person = (props) => {
	const style = {
		'@media (min-width: 960px)': {
			backgroundColor: 'gray'
		}
	};

		// const rnd = Math.random();
		// if (rnd > 0.7) {
		// 	throw new Error('Smth went wrong');
		// };

		return (
		<div className={classes.Person}>
			<p onClick={props.click}>I՛m {props.name} and {props.age} old.</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
		)
}

export default person;
