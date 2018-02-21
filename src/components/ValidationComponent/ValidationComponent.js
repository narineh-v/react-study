import React from 'react';

const ValidationComponent = (props) => {
  return (
    <div>
      <p>The length of the input text is {props.charlength}</p>
      { props.charlength > 10 ?
        <span>Text too long</span>
        :props.charlength < 5 ?
        <span>Text too short</span>
        :<span>normal</span>
      }
    </div>
  )
}
export default ValidationComponent;
