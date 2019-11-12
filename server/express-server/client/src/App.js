import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import serverMethods from './';

class App extends Component {
  state = {
    data: null
  };

  talkToServer() {
    fetch('/site', {// turn to "/site" channel
      method: 'POST', //in which matter the SERVER will get the request
      credentials: 'include',
      headers: { // fail safe
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({Hi: 'Hi'}) //translate the request
    }).then(res => res.json() // tanslate the respose
    .then(res => console.log(res)));// do ("...") (to the)\(with the) response
  }

  render() {
    return (
      <div className="App">
        {this.talkToServer()}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* Render the newly fetched data inside of this.state.data  */}
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;