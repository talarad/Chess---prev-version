import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table'
import firstTable from './first-table'
import GreetingNewUser from './GreetingNewUser'
//import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const moveSound = new Audio(require('./moveSound.wav'));

export default function App() {
  const [table, updateTable] = useState(firstTable)
  const [isClicked, click] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);
  const [user, setUser] = useState({ username: null, password: null })
  const [currentRow, updateRow] = useState();
  const [currentColumn, updateColumn] = useState();
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
    newTable[currentRow][currentColumn].clicked = false;
    const movedPiece = { ...newTable[currentRow][currentColumn] }

    if (row === currentRow && column === currentColumn) {
      newTable[row][column].clicked = false;
      removeClick(newTable);
      return;
    }

    const isValid = isMoveValid(row, column, movedPiece)

    if (isValid) {
      newTable[currentRow][currentColumn] = { name: "" };
      newTable[row][column] = movedPiece;
      moveValid(row, column, newTable)
    }
  }

  function moveValid(row, column, newTable) {
    moveSound.play()
    removeClick(newTable);
    updatePlayer(player === "white" ? "black" : "white")
  }

  function removeClick(newTable) {
    updateTable(newTable);
    click(!isClicked)
  }

  function isMoveValid(row, column, piece) {
    if (piece.name === "pawn") {
      return isPawnMoveValid(row, column, piece)
    } else if (piece.name === "rook") {
      return isRookMoveValid(row, column)
    } else if (piece.name === "bishop") {
      return isBishopMoveValid(row, column)
    } else if (piece.name === "king") {
      return isKingMoveValid(row, column, piece)
    } else if (piece.name === "queen") {
      return isQueenMoveValid(row, column)
    } else if (piece.name === "knight") {
      return isKnightMoveValid(row, column)
    }

    return true;
  }

  function isPawnMoveValid(row, column, piece) {
    if (column === currentColumn) {
      if (table[row][column].name !== "") return false
      if (piece.side === "white") {
        if (currentRow - row === 1 || (piece.firstMove && currentRow - row === 2)) {
          piece.firstMove = false;
          return true
        }
      } else if (row - currentRow === 1 || (piece.firstMove && row - currentRow === 2)) {
        piece.firstMove = false;
        return true
      }
      else {
        return false
      }
    } else if (table[row][column].name !== "" && Math.abs(column - currentColumn) === 1) {
      if ((piece.side === "white" && row - currentRow === -1) ||
        (piece.side === "black" && row - currentRow === 1)) {
        return true
      }
    } else return false
  }

  function isRookPathBlocked(row, column) {
    if (row !== currentRow) {
      if (row > currentRow) {
        for (let i = currentRow + 1; i < row; i++) {
          if (table[i][currentColumn].name !== "") return false;
        }
      } else {
        for (let i = currentRow - 1; i > row; i--) {
          if (table[i][currentColumn].name !== "") return false;
        }
      }
    } else {
      if (column > currentColumn) {
        for (let i = currentColumn + 1; i < column; i++) {
          if (table[currentRow][i].name !== "") return false;
        }
      } else {
        for (let i = currentColumn - 1; i > column; i--) {
          if (table[currentRow][i].name !== "") return false;
        }
      }
    }

    return true;
  }

  function isBishopPathBlocked(row, column) {
    if (row > currentRow) {
      if (column > currentColumn) {
        for (let i = 1; i < Math.abs(currentRow - row); i++) {
          if (table[currentRow + i][currentColumn + i].name !== "") return false;
        }
      } else {
        for (let i = 1; i < Math.abs(currentRow - row); i++) {
          if (table[currentRow + i][currentColumn - i].name !== "") return false;
        }
      }
    } else {
      if (column > currentColumn) {
        for (let i = 1; i < Math.abs(currentRow - row); i++) {
          if (table[currentRow - i][currentColumn + i].name !== "") return false;
        }
      } else {
        for (let i = 1; i < Math.abs(currentRow - row); i++) {
          if (table[currentRow - i][currentColumn - i].name !== "") return false;
        }
      }
    }
    return true;
  }

  function isRookMoveValid(row, column) {
    if (!(column === currentColumn || row === currentRow)) return false
    if (table[row][column].side === table[currentRow][currentColumn].side) return false
    if (Math.abs(row - currentRow) === 1 || Math.abs(column - currentColumn) === 1) return true

    return isRookPathBlocked(row, column)
  }

  function isBishopMoveValid(row, column) {
    if (Math.abs(currentRow - row) !== Math.abs(currentColumn - column)) return false
    if (table[row][column].side === table[currentRow][currentColumn].side) return false
    if (Math.abs(row - currentRow) === 1 && Math.abs(column - currentColumn) === 1) return true

    return isBishopPathBlocked(row, column)
  }

  function isKingMoveValid(row, column, piece) {
    if (table[row][column].side !== table[currentRow][currentColumn].side &&
      Math.abs(row - currentRow) <= 1 && Math.abs(column - currentColumn) <= 1) return true

    if (piece.name === 'king' && piece.firstMove) {
      //moving right
      if (column - currentColumn === 2 && table[row][currentColumn + 3].name === 'rook' && table[row][currentColumn + 3].firstMove &&
        table[row][currentColumn + 1].name === '' && table[row][currentColumn + 2].name === '') {
        //castling
        rightCastle(row, column, piece);
      }
      if (column - currentColumn === -2 && table[row][currentColumn - 4].name === 'rook' && table[row][currentColumn - 4].firstMove &&
        table[row][currentColumn - 1].name === '' && table[row][currentColumn - 2].name === '' &&
        table[row][currentColumn - 3].name === '') {
        //castling
        leftCastle(row, column, piece);
      }
    }
  }

  function rightCastle(row, column, piece) {
    const newTable = [...table]
    newTable[currentRow][currentColumn].clicked = false;
    newTable[row][currentColumn + 2] = piece;
    newTable[row][currentColumn + 1] = newTable[row][currentColumn + 3];

    newTable[row][currentColumn + 1].firstMove = false;
    newTable[row][currentColumn + 2].firstMove = false;

    newTable[row][currentColumn] = { name: "" }
    newTable[row][currentColumn + 3] = { name: "" }

    moveValid(row, column, newTable)
  }

  function leftCastle(row, column, piece) {
    const newTable = [...table]
    newTable[currentRow][currentColumn].clicked = false;
    newTable[row][currentColumn - 2] = piece;
    newTable[row][currentColumn - 1] = newTable[row][currentColumn - 4];

    newTable[row][currentColumn - 1].firstMove = false;
    newTable[row][currentColumn - 2].firstMove = false;

    newTable[row][currentColumn] = { name: "" }
    newTable[row][currentColumn - 4] = { name: "" }

    moveValid(row, column, newTable)
  }



  function isQueenMoveValid(row, column) {
    return isBishopMoveValid(row, column) || isRookMoveValid(row, column)
  }

  function isKnightMoveValid(row, column) {
    return ((table[row][column].side !== table[currentRow][currentColumn].side) &&
      ((Math.abs(row - currentRow) === 2 && Math.abs(column - currentColumn) === 1) ||
        ((Math.abs(row - currentRow) === 1 && Math.abs(column - currentColumn) === 2))))
  }


  if (isNewUser) {
    return (
      <div className="App" >
        <GreetingNewUser setIsNewUser={setIsNewUser} setUser={setUser} />
        {/* <Table table={table} onCellClick={onCellClick} clicked={isClicked} onMove={onMove} /> */}
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