import React, { useState, useEffect } from "react";
import "./App.css";
import AlertTraps from "./components/alertTraps.js";

const App = () => {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [turn, setTurn] = useState("X");

  // Rotate matrix for checkWinner in columns
  const rotateMatrix = () => {
    let matrixRotate = board[0].map((val, index) =>
      board.map((row) => row[index]).reverse()
    );
    return matrixRotate;
  };
  // Change turn by clicking
  const changeTurn = () => {
    turn === "X" ? setTurn("O") : setTurn("X");
  };

  const checkWinnerInLine = (typeBoard) => {
    let Length = typeBoard[0].length;
    for (let arr of typeBoard) {
      for (let i = 0; i < Length; i++) {
        if (
          (arr[i] === "X" && arr[i + 1] === "X" && arr[i + 2] === "X") ||
          (arr[i] === "O" && arr[i + 1] === "O" && arr[i + 2] === "O")
        ) {
          alert(`Ha ganado ${turn}`);
          window.location.reload(false);
        }
      }
    }
  };
  const assignSquaredValue = (row, column) => {
    if (board[row][column] === null) {
      board[row][column] = turn;
      checkWinnerInLine(rotateMatrix());
      checkWinnerInLine(board);
      checkWinnerDiagonal(board);
      checkWinnerDiagonal(rotateMatrix());
      changeTurn();
    } else {
      alert("No te pases de listo");
    }
  };

  const checkWinnerDiagonal = (typeboard) => {
    let Length = typeboard.length;
    var diagonalUno = [];

    for (let i = 0; i < Length; i++) {
      for (let j = 0; j < Length; j++) {
        if (i === j && typeboard[i][j] !== null) {
          diagonalUno.push(typeboard[i][j]);
        }
      }
    }
    console.log(diagonalUno);
    if (
      diagonalUno[0] === diagonalUno[1] &&
      diagonalUno[0] === diagonalUno[2] &&
      diagonalUno[0] !== undefined
    ) {
      alert(`ha ganado ${turn}`);
      window.location.reload(false);
    }
  };

  return (
    <>
      <AlertTraps />
      <table className="board">
        <tbody>
          {board.map((row, i) => (
            <tr key={i}>
              {row.map((column, j) => (
                <td key={j}>
                  <p
                    onClick={() => {
                      assignSquaredValue(i, j);
                    }}
                    className="square"
                  >
                    {column}
                  </p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
