import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  //web title//
  useEffect(() => {
    document.title = `TicTacToe_ReactJs`;
  });

  //game code//
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const winningCombo = [
    [0, 1, 2], // 1st row
    [3, 4, 5], // 2nd row
    [6, 7, 8], // 3rd row
    [0, 3, 6], // 1st column
    [1, 4, 7], // 2nd column
    [2, 5, 8], // 3rd column
    [0, 4, 8], // Diagonal
    [2, 4, 6] // Diagonal
  ];

  // useEffect(() => {
  //   setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  //   console.log(currentPlayer);
  // }, [board]);

  const handleClick = position => {
    let newBoard = [...board]; // ["", "", "", "", "", "", "", "", ""]
    if (newBoard[position] === "") {
      newBoard[position] = currentPlayer; // ["X", "", "", "", "", "", "", "", ""]
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
    setBoard(newBoard);
  };

  const resetGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
  };

  useEffect(() => {
    winningCombo.forEach(combo => {
      let winCondition = combo.map(i => {
        return board[i];
      });
      console.log(winCondition);
      if (winCondition.join("") === "XXX") {
        setWinner("X");
      } else if (winCondition.join("") === "OOO") {
        setWinner("O");
      } else if (
        winCondition.join("") !== "XXX" &&
        winCondition.join("") !== "OOO" &&
        board.join("").length === 9
      ) {
        setWinner("Draw");
      }
    });
  }, [board]);
  console.log(winner);

  return (
    <div className="App">
      <h1>Tic Tac Toe React</h1>
      <div className="Board">
        {board.map((value, index) => {
          return (
            <div
              className="boxes"
              onClick={() => handleClick(index)}
              key={index}
              id={index}
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className="currentPlayerMsg">
        Current Player: {currentPlayer}
        {""}
      </div>
      <div className="winner">
        Winner: {winner}
        {""}
      </div>
      <button className="reset" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
}
export default App;
//use effect to check winning combo
