import { useEffect, useState } from "react";
import Square from "./Square";

const Board = () => {
  let scoreX = 0;
  let scoreO = 0;
  const [xIsNext, setXIsNext] = useState(true);
  const [xScore, setXScore] = useState(scoreX);
  const [oScore, setOScore] = useState(scoreO);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        if (squares[a] === "X") {
          scoreX++;
        } else if (squares[a] === "O") {
          scoreO++;
        }
        return squares[a];
      }
    }
    return null;
  };

  const tryAgain = () => {
    return squares.some((arrValue) => arrValue === null);
  };

  const winner = calculateWinner(squares);

  // console.log("score X is", scoreX);
  // console.log("score O is", scoreO);
  let displayWinner;

  if (winner) {
    displayWinner = `Winner is : ${winner}`;
  } else if (tryAgain() === false) {
    displayWinner = "Game over try again to win.";
  } else {
    displayWinner = `Next player is: ${xIsNext ? "X" : "O"}`;
  }

  const handleRefresh = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div>
      <div className="display-winner">{displayWinner}</div>
      <div className="display-winner">X player score is: {scoreX}</div>
      <div className="display-winner">O player score is: {scoreO}</div>
      <button className="refresh-btn" onClick={handleRefresh}>
        Refresh
      </button>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};
export default Board;
