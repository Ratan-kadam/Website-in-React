import React, { Component, PropTypes } from 'react';
import { setActiveAction } from '../actions/FileActions';

const propTypes = {
  dispatch: PropTypes.func,
};

export default class Header extends Component {
  constructor() {
    super();
  }


  render() {
    return (<div className="header">
    </div>)
  }
}

Header.propTypes = propTypes;
