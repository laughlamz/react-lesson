import React, { useContext } from 'react';
import {NumberContext} from '../contexts/NumberContext';

function RandomNumber() {
    const { number, updateNumber } = useContext(NumberContext);

    return <div>
        <h1>{number}</h1>
        <button onClick={updateNumber}>Click me</button>
    </div>
}

export default RandomNumber;