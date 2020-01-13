import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        Band Name: {this.props.name} 
        <button onClick={this.props.handleDelete}>x</button>
      </li>
    );
  }
};

export default Band;
