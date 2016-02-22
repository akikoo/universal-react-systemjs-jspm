'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../Title/Title';

import './Card.css!';

class CardComponent extends React.Component {
  render() {
    return (
      <div className="card">
        <Title title={this.props.title} />
        <div className="card__content">
          <p>I am a very simple card.</p>
        </div>
      </div>
    );
  }
}

export default CardComponent;