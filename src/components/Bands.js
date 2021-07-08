import React, { Component } from 'react';
import Band from './Band';

export default class Bands extends Component {
  render() {
    return (
      <div>
        {this.props.bands.map(band => (
          <Band
            key={band.id}
            name={band.name}
            handleDelete={() => this.props.handleDelete(band.id)}
          ></Band>
        ))}
      </div>
    );
  }
}
