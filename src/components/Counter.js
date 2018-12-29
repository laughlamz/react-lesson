import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increaseNumber = this.increaseNumber.bind(this);
    }

    increaseNumber() {                      // two times increase but affect still one times
        this.setState({
            count: this.state.count + 1           
        });

        this.setState({
            count: this.state.count + 1           
        });
    }

    render() {
        return <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.increaseNumber}>Increase</button>
        </div>;
    }
}

export default Counter;