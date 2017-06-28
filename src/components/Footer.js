import React, { Component, PropTypes } from 'react';
import { setActiveAction } from '../actions/FileActions';
import Accord from '../components/Accord';

const propTypes = {
  dispatch: PropTypes.func,
};

export default class Footer extends Component {
  constructor() {
    super();
  }


  render() {
    return (<div>
      this is footer component
    </div>)
  }
}

Footer.propTypes = propTypes;
