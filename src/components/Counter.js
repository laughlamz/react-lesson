import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increaseNumber = this.increaseNumber.bind(this);
    }

    increaseNumber() {                      // fyi: Event loop - Queue with setTimeout( ,0)
        this.setState(state => {                // this is state at current time
            return {
                count: state.count + 1          // state.count # this.state.count
            }
        });

        this.setState(state => {
            return {
                count: state.count + 1
            }
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