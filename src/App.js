import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import Counter2 from './components/Counter2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Counter2 />
      </div>
    );
  }
}

export default App;
