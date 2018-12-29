import React, { Component } from 'react';
import './App.css';

import List from './components/List';
import Counter from './components/Counter';
import {NumberContext} from './contexts/NumberContext';
import {NumberProvider} from './contexts/NumberContext';
     // this is quick test
                                                            // In normal we just use for children(TopNav or Route(cart or ...))

import RandomNumber from './components/RandomNumber';

const data = ['A', 'B', 'C'];

class App extends Component {
  render() {
    return (
      <NumberProvider>
        <div className="App">
          <RandomNumber />
          <Counter>
            { ({ count }) => <div>{count}</div>}
          </Counter>
        </div>
      </NumberProvider>
    );
  }
}

export default App;
