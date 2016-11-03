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
    console.log("header props");
    console.log(this.props);
    return (<div className="header">
    </div>)
  }
}

Header.propTypes = propTypes;
