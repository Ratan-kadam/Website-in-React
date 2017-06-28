import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Mysample from '../components/mysample';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Acccordian from '../components/Acccordian';
import Accord from '../components/Accord';
import config  from '../components/config';
import * as constants from '../constants/AppConstants';
import { addNewData, addTabsCount  } from '../actions/FileActions';



const propTypes = {
  dispatch: PropTypes.func.isRequired,
  input: PropTypes.object,
};

class NavContainer extends Component {
  componentDidMount() {
  }

  render() {
    console.log("Nav container props");
    console.log(this.props);
    return (
        <Nav  {...this.props} />
    )
  }
}

NavContainer.propTypes = propTypes;


function mapStateToProps(state) {
  const { navReducer } = state;
  return {
    navReducer,
  };
}

export default connect(mapStateToProps)(NavContainer);
