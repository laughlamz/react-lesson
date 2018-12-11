import React from 'react';

function Card2(props) {
    const { heading, children } = props;
    return (
        <div className="Card">
            <div>
                <h2>{heading}</h2>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Card2;