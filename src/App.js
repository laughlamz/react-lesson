import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List';

const data = ['A', 'B', 'C'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <List data={data} render={(item) => <div>{item}</div>} />
        <List data={data} render={(item) => <div> - {item}</div>} />
      </div>
    );
  }
}

export default App;
