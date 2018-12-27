import React, { Component } from 'react';
import './App.css';

import List from './components/List';
import Counter from './components/Counter';

const data = ['A', 'B', 'C'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <List data={data} render={(item) => <div>{item}</div>} />
        <List data={data} render={(item) => <div> - {item}</div>} />
        <Counter>
          { ({ count }) => <div>{count}</div>}
        </Counter>
      </div>
    );
  }
}

export default App;
