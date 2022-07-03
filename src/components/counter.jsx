import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    return ( 
    <>
     <span
        className={`countx X ${props.rotatewinnerX === true ? "rotate-center" : ""}`}>
        X: {props.countX}
      </span>
      <span
        className={`counto O ${props.rotatewinnerO === true ? "rotate-center" : ""}`} >
        {props.countO} :O
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