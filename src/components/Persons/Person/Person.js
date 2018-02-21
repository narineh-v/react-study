import React, {Component} from 'react';
//import Radium from 'radium';
import classes from './Person.css';

class Person extends Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] inside Constructor', props);
	};

	componentWillMount() {
		console.log('[Person.js] inside componentWillMount');
	}

	componentDidMount() {
		console.log('[Person.js] inside componentDidMount');
	}

	render() {
		console.log('[Person.js] inside render');
		const style = {
			'@media (min-width: 960px)': {
				backgroundColor: 'gray'
			}
		};

		return (
		   <div className={classes.Person}>
					<p onClick={this.props.click}>I՛m {this.props.name} and {this.props.age} old.</p>
					<p>{this.props.children}</p>
					<input type="text" onChange={this.props.changed} value={this.props.name}/>
				</div>
			);
	}
};

export default Person;

		// const rnd = Math.random();
		// if (rnd > 0.7) {
		// 	throw new Error('Smth went wrong');
		// };
