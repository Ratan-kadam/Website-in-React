import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CoverPage from '../components/CoverPage';
import AboutMe from '../components/AboutMe';
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
      <div>
        <CoverPage {...this.props} />
        <AboutMe {...this.props} />
      </div>
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
