import React from 'react';
import './App.css';

const numberOfRows = 10;
const numberOfColumns = 16;
const table = new Array(numberOfColumns);

for (let column = 0; column < numberOfColumns; column++) {
  table[column] = new Array(numberOfRows).fill("");
}

function App() {
  
  function renderRows() {
    return (
      <div>
        {this.state.table.map((row, counter) => {
          return (<div className="row" key={counter}>{row.map((cell, index) => {
            return (<div className="empty" key={index}>{cell}</div>)
          })}</div>)
        })
        }
      </div>
    )
  }


  return (
    <div className="App">
        {renderRows}
    </div>
  );
}

export default App;
