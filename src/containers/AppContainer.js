import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Mysample from '../components/mysample';
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

class AppContainer extends Component {
  componentDidMount() {
  }

  render() {
    let accordlist = config.Acccordian;
    let navoptions = config.navoptions;

    return (
      <div>
              <Acccordian {...this.props}  accordianList={accordlist} />
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
