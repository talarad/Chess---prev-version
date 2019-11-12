import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table'
import firstTable from './first-table'
import GreetingNewUser from './GreetingNewUser'

export default function App() {
  const [table, updateTable] = useState(firstTable)
  const [isClicked, click] = useState(false);
  const [isNewClient, setIsNewClient] = useState(true);
  const [user, setUser] = useState({ username: null, password: null })
  const [clickedRow, updateRow] = useState();
  const [clickedColumn, updateColumn] = useState();

  function onCellClick(row, column) {
    if (isClicked) {
      onMove(row, column)
    } else {
      if(table[row][column].name === "") return;
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

    newTable[clickedRow][clickedColumn] = "";
    newTable[row][column] = movedPiece;

    updateTable(newTable);
    click(!isClicked)
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