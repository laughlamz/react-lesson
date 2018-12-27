import React, { Component } from 'react';
import './App.css';

import List from './components/List';
import Counter from './components/Counter';

const NumberContext = React.createContext();

const data = ['A', 'B', 'C'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberContext.Provider value={5}>
          <NumberContext.Consumer>
            {context => <div>{context}</div>}
          </NumberContext.Consumer>
        </NumberContext.Provider>
        <Counter>
          { ({ count }) => <div>{count}</div>}
        </Counter>
      </div>
    );
  }
}

export default App;
