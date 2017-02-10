import React from 'react';
import './Title.css!';

class Title extends React.Component {
  render() {
    return (
      <h3 className="title">{this.props.title}</h3>
    );
  }
}

export default Title;