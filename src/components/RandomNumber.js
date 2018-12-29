import React, { Component } from 'react';
import {NumberContext} from '../contexts/NumberContext';

class RandomNumber extends Component {
    render() {
        return <NumberContext.Consumer>
            { ({ number, updateNumber }) => <div>
            <h1>{number}</h1>
            <button onClick={updateNumber}>Click me</button>
            </div>
            }
        </NumberContext.Consumer>
    }
}

export default RandomNumber;