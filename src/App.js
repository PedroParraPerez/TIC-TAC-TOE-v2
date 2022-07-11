import React, { useState } from "react";
import "./App.css";
import AlertTraps from "./components/alertTraps.js";
import Board from "./components/board.jsx";
import Counter from "./components/counter";

const App = () => {
  // USESTATE PLACE
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [turn, setTurn] = useState("✖");
  const [count, setCount] = useState({ "✖": 0, "⭕": 0 });
  const [canplay, setCanplay] = useState(true);
  const [rotatewinner, setRotatewinner] = useState({ "✖": false, "⭕": false });
  const [controlSizeBoard, setControlSizeBoard] = useState(true);

  //
  const controlSizeBoardfunc = () => {
    setControlSizeBoard(!controlSizeBoard);
    controlSizeBoard === true
      ? setBoard([
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ])
      : setBoard([
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
        ]);
  };
  // Change turn by clicking
  const changeTurn = () => {
    turn === "✖" ? setTurn("⭕") : setTurn("✖");
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
          (arr[i] === "✖" && arr[i + 1] === "✖" && arr[i + 2] === "✖") ||
          (arr[i] === "⭕" && arr[i + 1] === "⭕" && arr[i + 2] === "⭕")
        ) {
          matchCounter();
          // alert(`haaaaa ganado ${turn}`);
          if (turn === "✖") {
            setRotatewinner({ "✖": true, "⭕": false });
          } else {
            setRotatewinner({ "✖": false, "⭕": true });
          }
        }
      }
    }
  };
  // Check Winner for diagonal for matrix and RotateMatrix
  const checkWinnerDiagonal = (typeboard) => {
    let Length = typeboard.length;
    let diagonalUno = [];

    for (let i = 0; i < Length; i++) {
      for (let j = 0; j < Length; j++) {
        if (i === j && typeboard[i][j] !== null) {
          diagonalUno.push(typeboard[i][j]);
        }
      }
    }
    const everyX = (value) => value === "✖";
    const everyO = (value) => value === "⭕";
    diagonalUno.every(everyX);
    diagonalUno.every(everyO);

    if (
      diagonalUno[0] === diagonalUno[1] &&
      diagonalUno[0] === diagonalUno[2] &&
      diagonalUno[0] !== undefined
    ) {
      matchCounter();
      // alert(`ha ganado ${turn}`);
      if (turn === "✖") {
        setRotatewinner({ "✖": true, "⭕": false });
      } else {
        setRotatewinner({ "✖": false, "⭕": true });
      }
    }
  };
  // Execution of all functions except assignSquareValue. This funct and assign excuse always when i clicked one square
  const allcheckWinnersAndChangeTurn = () => {
    checkWinnerInLine(board);
    checkWinnerInLine(rotateMatrix());
    checkWinnerDiagonal(board);
    checkWinnerDiagonal(rotateMatrix());
    changeTurn();
  };
  // Counter of winners to all matchs
  const matchCounter = () => {
    turn === "✖" ? (count["✖"] += 1) : (count["⭕"] += 1);

    setCanplay(false);
  };
  // Refresh match
  const refreshMatch = () => {
    setCanplay(true);
    controlSizeBoard === true
      ? setBoard([
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ])
      : setBoard([
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
        ]);
    setRotatewinner({ "✖": false, "⭕": false });
  };

  return (
    <>
      <AlertTraps />
      <button
        onClick={() => {
          controlSizeBoardfunc();
        }}
      >
        HARD MODE
      </button>
      <Counter
        rotatewinnerX={rotatewinner["✖"]}
        rotatewinnerO={rotatewinner["⭕"]}
        countX={count["✖"]}
        countO={count["⭕"]}
      />
      <Board
        canplay={canplay}
        board={board}
        assignSquaredValue={assignSquaredValue}
        allcheckWinnersAndChangeTurn={allcheckWinnersAndChangeTurn}
      />
      <button
        className={`refresh square ${turn === "✖" ? "✖" : "⭕"}`}
        onClick={refreshMatch}
      >
        Comenzar nueva partida
      </button>
    </>
  );
};

export default App;
