import React, { useState } from 'react';
import './App.css';
import Table from './Table'
import GreetingNewUser from './GreetingNewUser';

const numberOfRows = 8;
const numberOfColumns = 8;
const table = new Array(numberOfColumns);

for (let column = 0; column < numberOfColumns; column++) {
  table[column] = new Array(numberOfRows).fill("");
}


function App() {
  
  const [isNewClient, setIsNewClient] = useState(true);
  const [user, setUser] = useState({ username: null, password: null })

  if (isNewClient) {
    return <GreetingNewUser setIsNewClient={setIsNewClient} setUser={setUser}/>;
  } else {
    return (
      <div className="App">
        {console.log(user)}
        <Table table={table} />
      </div>
    );
  }
}

export default App;
