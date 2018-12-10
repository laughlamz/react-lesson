import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        
        console.log("Counter constructor");
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        });
    }

    

    render() {
        console.log("Counter render");

        return (
            <div className="Counter">
                <button onClick={() => this.increase()}>Increase</button>
                <div>{this.state.count}</div>
                <button onClick={() => this.decrease()}>Decrease</button>                
            </div>
        );
    }


    componentDidMount() {                   // just 1st time, or change page
        console.log("Counter did mount");
    }
    
    componentDidUpdate() {                  // not 1st, just update
        console.log("Counter did update");
    }

    componentWillUnmount() {                // before unmount (change page)
        console.log("Counter will unmount");
    }
    
    // if return false, will not render anymore, just in this class(scope)
    // use if big project
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state.count, nextState.count);               
        if (this.state.count === nextState.count)
            return false;                   // change this true/false and see if equal, click remove and watch console, change App: to {true && <Counter />}
        return true;
    }
}



export default Counter;
