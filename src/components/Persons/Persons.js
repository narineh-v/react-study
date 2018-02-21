import React, {Component} from 'react'
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] inside Constructor', props);
  };

  componentWillMount() {
    console.log('[Persons.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount');
  }

  render() {
    console.log('[Persons.js] inside render');
    return this.props.persons.map((person, index) => {
      return <Person
        name = {person.name}
        age = {person.age}
        key = {person.id}
        click={() => this.props.clicked(index)}
        changed = {(e) => this.props.changed(e, person.id)}
        />
    });
  }

};

  export default Persons;
