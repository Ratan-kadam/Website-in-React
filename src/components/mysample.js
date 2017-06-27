import React, { Component, PropTypes } from 'react';
import { setActiveAction } from '../actions/FileActions';

const propTypes = {
  dispatch: PropTypes.func,
  tabName: PropTypes.string,
  input: PropTypes.object,
};

export default class Mysample extends Component {
  constructor() {
    super();
  }


  render() {
    return (<div>
      this is my sample component iiiii
    </div>)
  }
}

Mysample.propTypes = propTypes;
