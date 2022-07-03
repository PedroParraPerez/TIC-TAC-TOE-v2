import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Board = (props) => {
    return ( <>
     <table className="board">
        <tbody>
          {props.board.map((row, i) => (
            <tr key={i}>
              {row.map((column, j) => (
                <td key={j}>
                  <p
                    onClick={() => {
                      if (props.canplay === true) {
                        props.assignSquaredValue(i, j);
                        props.allcheckWinnersAndChangeTurn();
                      }
                    }}
                    className={`square ${column === "X" ? "X" : "O"}`}
                  >
                    {column}
                  </p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    
    
    
    
    
    </> );
}
 
export default Board;

Board.propTypes = {
    canplay: PropTypes.bool,
    board: PropTypes.array,
    assignSquaredValue: PropTypes.func,
    allcheckWinnersAndChangeTurn: PropTypes.func
  };