import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CoverPage from '../components/CoverPage';
import * as constants from '../constants/AppConstants';
import { addNewData, addTabsCount  } from '../actions/FileActions';



const propTypes = {
  dispatch: PropTypes.func.isRequired,
  input: PropTypes.object,
};

class AppContainer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <CoverPage {...this.props}/>
    );
  }
}

AppContainer.propTypes = propTypes;


function mapStateToProps(state) {
  const { input } = state;
  return {
    input,
  };
}

export default connect(mapStateToProps)(AppContainer);
