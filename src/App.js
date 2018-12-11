import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Card2 from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card heading="This is heading"> this is content </Card>
        <Card2 heading="This is heading card 2"> this is content card 2</Card2>
      </div>
    );
  }
}

export default App;
