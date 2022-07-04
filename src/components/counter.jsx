import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    return ( 
    <>
     <span
        className={`countx X ${props.rotatewinnerX === true ? "rotate-center" : ""}`}>
        ✖: {props.countX}
      </span>
      <span
        className={`counto O ${props.rotatewinnerO === true ? "rotate-center" : ""}`} >
        <span>{props.countO}</span> : <span>⭕</span>
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