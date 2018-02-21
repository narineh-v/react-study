import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

 const assignedClasses =[];
 let btnClass = '';

 if (props.showPersons) {
   btnClass = classes.red;
 }

  if(props.persons.length <= 2) {
    classes.push(classes.red)
  }

  if(props.persons.length <=1) {
    classes.push(classes.bold)
  };

  return (
    <div className = {classes.Cockpit}>
      <h1> {props.title} </h1>
      <p className = {assignedClasses.join(' ')}>This is really working!</p>

      <button  onClick={() => this.switchNameHandler('Maximilian')} key="2">Switch Name</button>
      <p></p>
      <button className = {btnClass} onClick = {props.clicked} key="1">Toggle Persons</button>

      <p></p>
    </div>
  )
};

export default cockpit;
