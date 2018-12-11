import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { heading, children } = this.props;
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
}

export default Card;
