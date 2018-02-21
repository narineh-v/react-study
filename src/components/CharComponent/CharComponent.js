import React from 'react';

const CharComponent = (props) => {
  const charStyle = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    cursor: 'pointer'
  };

  return <div style = {charStyle} onClick={props.click}>{props.char}</div>
}
export default CharComponent;
