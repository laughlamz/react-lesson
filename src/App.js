import React, { Component } from 'react';
import './App.css';

import List from './components/List';
import Counter from './components/Counter';
import NumberProvider from './components/NumberProvider';
import NumberContext from './contexts/NumberContext';      // this is quick test
                                                           // In normal we just use for children(TopNav or Route(cart or ...))

const data = ['A', 'B', 'C'];

class App extends Component {
  render() {
    return (
      <NumberProvider>
        <div className="App">
            <NumberContext.Consumer>
              { ({ number, updateNumber }) => <div>
                <h1>{number}</h1>
                <button onClick={updateNumber}>Click me</button>
                </div>
              }
            </NumberContext.Consumer>


          <Counter>
            { ({ count }) => <div>{count}</div>}
          </Counter>
        </div>
      </NumberProvider>
    );
  }
}

export default App;
