import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showContent: true
    };
    
    console.log("App constructor");
  }

  remove() {
    this.setState({
        showContent: false
    });
  }
  
  render() {
    console.log("App render");
    return (
      <div className="App">
        <button onClick={() => this.remove()}>Remove(unmount)</button>
        {this.state.showContent && <Counter />}
      </div>
    );
  }

  componentWillUnmount() {                // before unmount (change page)
    console.log("App will unmount");
  }
}

export default App;
