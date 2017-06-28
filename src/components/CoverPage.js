import React, { Component, PropTypes } from 'react';

const propTypes = {
  dispatch: PropTypes.func,
};

export default class CoverPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
        <span>this is cover page</span>
    );
    }
}

CoverPage.propTypes = propTypes;
