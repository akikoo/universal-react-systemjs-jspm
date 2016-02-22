'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../Title/Title';

import './Card.css!';

class Card extends React.Component {
  handleClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div className="card">
        <Title title={this.props.title} />
        <div className="card__content">
          <p>I am a very simple card.</p>
          <button onClick={this.handleClick}>Click me</button>
        </div>
      </div>
    );
  }
}

export default Card;