import React from 'react';

const UserInput = (props) => {
	return <input type="text" onChange = {props.onchange} value = {props.currentName}/>
}

export default UserInput;
