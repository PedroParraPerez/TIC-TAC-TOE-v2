import React, { useState } from "react";
import "./App.css";
import AlertTraps from "./components/alertTraps.js";

const App = () => {
  // USESTATE THAT I NEED
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [turn, setTurn] = useState("X");
  const [count, setCount] = useState({ X: 0, O: 0 });
  const [canplay, setCanplay] = useState(true);

  // Change turn by clicking
  const changeTurn = () => {
    turn === "X" ? setTurn("O") : setTurn("X");
  };
  // Assign values to square and validate the square is empty
  const assignSquaredValue = (row, column) => {
    if (board[row][column] === null) {
      board[row][column] = turn;
    } else {
      alert("Ese espacio no esta vacio");
    }
  };
  // Rotate matrix for checkWinner in columns
  const rotateMatrix = () => {
    let matrixRotate = board[0].map((val, index) =>
      board.map((row) => row[index]).reverse()
    );
    return matrixRotate;
  };
  // Check Winner for line in horizontally for matrix and RotateMatrix
  const checkWinnerInLine = (typeBoard) => {
    let Length = typeBoard[0].length;
    for (let arr of typeBoard) {
      for (let i = 0; i < Length; i++) {
        if (
          (arr[i] === "X" && arr[i + 1] === "X" && arr[i + 2] === "X") ||
          (arr[i] === "O" && arr[i + 1] === "O" && arr[i + 2] === "O")
        ) {
          matchCounter();
          alert(`haaaaa ganado ${turn}`);
        }
      }
    }
  };
  // Check Winner for diagonal for matrix and RotateMatrix
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
    if (
      diagonalUno[0] === diagonalUno[1] &&
      diagonalUno[0] === diagonalUno[2] &&
      diagonalUno[0] !== undefined
    ) {
      matchCounter();
      alert(`ha ganado ${turn}`);
    }
  };
  // Execution of all functions except assignSquareValue. This funct and assign excuse always when i clicked one square
  const allcheckWinnersAndChangeTurn = (row, column) => {
    checkWinnerInLine(board);
    checkWinnerInLine(rotateMatrix());
    checkWinnerDiagonal(board);
    checkWinnerDiagonal(rotateMatrix());
    changeTurn();
  };
  // Counter of winners to all matchs
  const matchCounter = () => {
    turn === "X" ? (count["X"] += 1) : (count["O"] += 1);

    setCanplay(false);
  };
  // Refresh match
  const refreshMatch = () => {
    setCanplay(true);
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  };

  return (
    <>
      <AlertTraps />
      <span className="countx X">X: {count.X}</span>
      <span className="counto O">{count.O} :O</span>
      <table className="board">
        <tbody>
          {board.map((row, i) => (
            <tr key={i}>
              {row.map((column, j) => (
                <td key={j}>
                  <p
                    onClick={() => {
                      if (canplay === true) {
                        assignSquaredValue(i, j);
                        allcheckWinnersAndChangeTurn();
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
      <button
        className={`refresh square ${turn === "X" ? "X" : "O"}`}
        onClick={refreshMatch}
      >
        Comenzar nueva partida
      </button>
    </>
  );
};

export default App;
