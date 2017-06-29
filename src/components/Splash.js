import React, { Component, PropTypes } from 'react';
import { setActiveAction } from '../actions/FileActions';

const propTypes = {
  dispatch: PropTypes.func,
};

export default class Splash extends Component {

  render() {
      return(
        <div className="splash">
              ... Loading
        </div>
      );
    }
 }

Splash.propTypes = propTypes;
