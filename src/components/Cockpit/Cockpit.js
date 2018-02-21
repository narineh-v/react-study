import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  const assignedClasses =[];


  if(props.persons.length <= 2) {
    classes.push(classes.red)
  }

  if(props.persons.length <=1) {
    classes.push(classes.bold)
  };

  return (
    <div className = {classes.Cockpit}>
      <h1> This is a React App</h1>
      <p className = {assignedClasses.join(' ')}>This is really working!</p>

      <button style = {style} onClick={() => this.switchNameHandler('Maximilian')} key="2">Switch Name</button>
      <p></p>
      <button className = {btnClass} onClick = {this.togglePersonsHandler} key="1">Toggle Persons</button>

      <p></p>
    </div>
  )
};

export default cockpit;
