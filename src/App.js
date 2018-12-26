import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AwesomeImage from './components/AwesomeImage';
import HoverOpacity from './components/HoverOpacity';
import withHoverOpacity from './components/withHoverOpacity';

const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage);

class App extends Component {
  render() {
    return (
      <div className="App">
        <HoverOpacityAwesomeImage src="https://picsum.photos/200/300"/>
      </div>
    );
  }
}

export default App;
