import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table'
import firstTable from './first-table'
import GreetingNewUser from './GreetingNewUser'

const moveSound = new Audio(require('./moveSound.wav'));

export default function App() {
  const [table, updateTable] = useState(firstTable)
  const [isClicked, click] = useState(false);
  const [isNewClient, setIsNewClient] = useState(true);
  const [user, setUser] = useState({ username: null, password: null })
  const [clickedRow, updateRow] = useState();
  const [clickedColumn, updateColumn] = useState();
  const [player, updatePlayer] = useState("white")

  function onCellClick(row, column) {
    if (!isClicked && table[row][column].side !== player) return;

    if (isClicked) {
      onMove(row, column)
    } else {
      if (table[row][column].name === "") return;
      const newTable = [...table]
      table[row][column].clicked = true;
      updateTable(newTable)
      click(!isClicked)
      updateRow(row);
      updateColumn(column)
    }
  }

  function onMove(row, column) {
    const newTable = [...table]
    newTable[clickedRow][clickedColumn].clicked = false;
    const movedPiece = { ...newTable[clickedRow][clickedColumn] }

    if (row === clickedRow && column === clickedColumn) {
      newTable[row][column].clicked = false;
      removeClick(newTable);
      return;
    }

    const isValid = checkValidity(row, column, movedPiece)

    if (isValid) {
      newTable[clickedRow][clickedColumn] = { name: "" };
      newTable[row][column] = movedPiece;
      moveSound.play()
      removeClick(newTable);
      updatePlayer(player === "white" ? "black" : "white")
    }
  }

  function removeClick(newTable) {
    updateTable(newTable);
    click(!isClicked)
  }

  function checkValidity(row, column, piece) {
    if (piece.name === "pawn") {
      return pawnCheck(row, column, piece)
    } else if (piece.name === "rook") {
      return rookCheck(row, column)
    } else if (piece.name === "bishop") {
      return bishopCheck(row, column)
    } else if (piece.name === "king") {
      return kingCheck(row, column)
    } else if (piece.name === "queen") {
      return queenCheck(row, column)
    } else if (piece.name === "knight") {
      return knightCheck(row, column)
    }

    return true;
  }

  function pawnCheck(row, column, piece) {
    if (column === clickedColumn) {
      if (piece.side === "white") {
        if (clickedRow - row === 1 || ((clickedRow === 1 || clickedRow === 6) && clickedRow - row === 2))
          return true
      } else if (row - clickedRow === 1 || ((clickedRow === 1 || clickedRow === 6) && row - clickedRow === 2))
        return true
      else {
        return false
      }
    }
  }

  function rookCheck(row, column) {
    return column === clickedColumn || row === clickedRow
  }

  function bishopCheck(row, column) {
    return Math.abs(clickedRow - row) === Math.abs(clickedColumn - column)
  }

  function kingCheck(row, column) {
    return Math.abs(row - clickedRow) <= 1 && Math.abs(column - clickedColumn) <= 1
  }

  function queenCheck(row, column) {
    return bishopCheck(row, column) || rookCheck(row, column)
  }

  function knightCheck(row, column) {
    return (Math.abs(row - clickedRow) === 2 && Math.abs(column - clickedColumn) === 1) ||
      ((Math.abs(row - clickedRow) === 1 && Math.abs(column - clickedColumn) === 2))
  }


  if (isNewClient) {
    return (
      <div className="App" >
        {/* <GreetingNewUser setIsNewClient={setIsNewClient} setUser={setUser} />; */}
        <Table table={table} onCellClick={onCellClick} clicked={isClicked} onMove={onMove} />
      </div>
    )
  } else {
    return (
      <div className="App">
        <Table table={table} onCellClick={onCellClick} clicked={isClicked} onMove={onMove} />
      </div>
    );
  }
}