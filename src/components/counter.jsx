import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    return ( 
    <>
     <span
        className={`countx X`}>
        <span className={`a ${props.rotatewinnerX === true ? "rotate-center" : ""}`}>✖</span>: <span className={`${props.rotatewinnerX === true ? "rotate-center" : ""}`}>{props.countX}</span>
      </span>
      <span
        className={`counto O`} >
        <span className={`a ${props.rotatewinnerO === true ? "rotate-center" : ""}`}>{props.countO}</span> : <span className={`${props.rotatewinnerO === true ? "rotate-center" : ""}`}>⭕</span>
      </span>
    </> );
}
 
export default Counter;
Counter.propTypes = {
    countO: PropTypes.number,
    countX: PropTypes.number,
    rotatewinnerO: PropTypes.bool,
    rotatewinnerX: PropTypes.bool,
  };