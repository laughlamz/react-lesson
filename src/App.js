import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AwesomeImage from './components/AwesomeImage';
import HoverOpacity from './components/HoverOpacity';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HoverOpacity>
          <AwesomeImage src="https://picsum.photos/200/300" />
        </HoverOpacity>
      </div>
    );
  }
}

export default App;
