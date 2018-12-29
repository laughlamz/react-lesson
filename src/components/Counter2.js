import React, { useState } from 'react';

export default function() {
    const [count, setCount] = useState(0);        // get, set

    return <div>
        <p>Times click useState-hooks:</p>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>;
}