import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Mysample from '../components/mysample';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
              <Nav  {...this.props} />
              <Header  {...this.props} />
              <Footer  {...this.props} />
      </div>
    )
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
