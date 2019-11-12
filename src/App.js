import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table'
import firstTable from './first-table'
import GreetingNewUser from './GreetingNewUser'


// export default class App extends React.Component {
//   constructor() {
//     super()

//     this.cellOnClick = this.cellOnClick.bind(this)
//     this.onMove = this.onMove.bind(this)

//     this.state = {
//       table: firstTable,
//       clicked: false
//     }
//   }

export default function App() {
  const [table, updateTable] = useState(firstTable)
  const [isClicked, click] = useState(false);
  const [isNewClient, setIsNewClient] = useState(true);
  const [user, setUser] = useState({ username: null, password: null })

  function cellOnClick(row, column) {
    const newTable = [...table]
    table[row][column].clicked = true;
    updateTable(newTable)
    click(!isClicked)
  }

  function onMove(row, column) {

  }
  if (isNewClient) {
    return (
      <div className="App" >
        <GreetingNewUser setIsNewClient={setIsNewClient} setUser={setUser} />;
      <Table table={table} cellOnClick={cellOnClick} clicked={isClicked} onMove={onMove} />
      </div>
    )
  } else {
    return (
      <div className="App">
        <Table table={table} cellOnClick={cellOnClick} clicked={isClicked} onMove={onMove} />
      </div>
    );
  }
}