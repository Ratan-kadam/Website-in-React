import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import * as constants from '../constants/AppConstants';
import { addNewData, addTabsCount  } from '../actions/FileActions';



const propTypes = {
  dispatch: PropTypes.func.isRequired,
  input: PropTypes.object,
};

class FooterContainer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Footer  {...this.props} />
    );
  }
}

FooterContainer.propTypes = propTypes;


function mapStateToProps(state) {
  const { footerReducer } = state;
  return {
    footerReducer,
  };
}

export default connect(mapStateToProps)(FooterContainer);
