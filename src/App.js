import React from 'react';
import './App.css';
import Table from './Table'

const numberOfRows = 8;
const numberOfColumns = 8;
const table = new Array(numberOfColumns);

for (let column = 0; column < numberOfColumns; column++) {
  table[column] = new Array(numberOfRows).fill("");
}

function App() {

  return (
    <div className="App">
      <Table table={table}/>
    </div>
  );
}

export default App;
