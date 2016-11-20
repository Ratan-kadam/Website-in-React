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
    console.log("Footer props");
    console.log(this.props);
    return (<div className="footer" />)
  }
}

Footer.propTypes = propTypes;
