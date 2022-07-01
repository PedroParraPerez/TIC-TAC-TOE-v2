import React, {useState} from "react";
import './App.css';
import AlertTraps from "./components/alertTraps.js"

const App = () => {
  const[board, setBoard] =useState( [
                                      [null,null,null],
                                      [null,null,null],
                                      [null,null,null],
                                    ])
 
  const [turn, setTurn] = useState("X")


  const changeTurn = () => {turn === "X" ? setTurn("O") : setTurn("X")}
  
  const assignSquaredValue = (row, column) => {
    checkWinnerRows()
    if(board[row][column] === null){
      board[row][column] = turn;
      changeTurn()
    }else{
      alert("No te pases de listo")
    }

  }
  const checkWinnerRows = () => {
  }

  return (
    <>
   <table className="board">
    <AlertTraps />
					<tbody>
						{board.map((row, i) => (
							<tr key={i}>
								{row.map((column, j) => (
									<td  key={j}>
										<div onClick={()=>{assignSquaredValue(i,j)}} className="square">{column}</div>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
    </>
  )
}

export default App;
