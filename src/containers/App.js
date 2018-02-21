import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import './App.css';

import Persons from '../components/Persons/Persons'
import Person from '../components/Persons/Person/Person'
import UserInput from '../components/UserInput/UserInput'
import UserOutput from '../components/UserOutput/UserOutput'

import ValidationComponent from '../components/ValidationComponent/ValidationComponent'
import CharComponent from '../components/CharComponent/CharComponent.js'

import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary.js'

class App extends Component {
  state = {
    persons: [
      {id:1,name: 'Max', age: 28},
      {id:2,name: 'Nare', age: 20},
      {id:3,name: 'Akop', age: 26}
    ],
      username: [
        {name: 'Ina'},
        {name: 'Ben'},
        {name: 'Alex'}
      ],
    otherState: 'some other value',
    showPersons: false,
    charLength: 0,
    charValArray: ['']
  };

  switchNameHandler = (newName) => {
    //Don't do this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Nare', age: 20},
        {name: 'Akop', age: 36}
      ]
    })
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  deleteChar = (ind) => {
    const charValArray = [...this.state.charValArray];
    charValArray.splice(ind, 1);
    this.setState({charValArray: charValArray});
    console.log(charValArray)
  };

  nameChangedHandler = (event, id) => {
    console.log(event.target.value);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  switchUsernameHandler = () => {
    this.setState({
      username: [
        {name: 'ANNA'},
        {name: 'MARIE'},
        {name: 'SONA'}
      ]
    })
  };

  usernameChangedHandler = (event) => {
    this.setState({
      username: [
        {name: event.target.value},
        {name: 'MARIE'},
        {name: 'SONA'}
      ]
    })
  };

  charChanged = (event) => {
    //const charVal = this.state.charValue;
    const charValLength = event.target.value.length;
    const charVal = event.target.value.split('');
    charVal.join('');
    this.setState({
      charLength: charValLength,
      charValArray: charVal
    });
  };

  render() {
    const style = {
      // backgroundColor: 'green',
      // font: 'inherit',
      // border: '1px solid blue',
      // padding: '8px',
      // cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let persons = null;


    if(this.state.showPersons) {
      persons = (
        <div>
        <Persons
          persons = {this.state.persons}
          clicked ={this.deletePersonHandler}
          changed = {this.nameChangedHandler} />
        </div>
      );

      

    };


    let charArray = (
      <div>
        {this.state.charValArray.map((char, index) => {
          return <CharComponent
            key = {index}
            char = {char}
            click = {() => this.deleteChar(index)}
            />
        })}
      </div>
    )



    return (
      // <StyleRoot>
      <div className={classes.App}>

{/*      {this.state.showPersons ?
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My hobies: singing</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Max!!!')} changed={this.nameChangedHandler} >My hobies: running</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div> : null
    }*/}

    {persons}


      <button onClick = {() => this.switchUsernameHandler()}>Switch Username</button>
      <UserOutput username = {this.state.username[0].name} /><UserInput onchange = {this.usernameChangedHandler} currentName = {this.state.username[0].name}/>
      <UserOutput username = {this.state.username[1].name} /><UserInput onchange = {this.usernameChangedHandler} currentName = {this.state.username[1].name} />
      <UserOutput username = {this.state.username[2].name} /><UserInput />
      <p></p>

      <div className = "charCode">
        <input type="text" onChange = {(event) => this.charChanged(event)} value = {this.state.charValArray}/>
        <p>{this.state.charLength}</p>
        <ValidationComponent charlength = {this.state.charLength}/>
        {charArray}
      </div>
      </div>
      // </StyleRoot>
      );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, here I am'));
  }
}

//export default Radium(App);
export default App;
