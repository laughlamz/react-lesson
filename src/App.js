import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card heading="This is heading"> this is content </Card>
      </div>
    );
  }
}

export default App;
