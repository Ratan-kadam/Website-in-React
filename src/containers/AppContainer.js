import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Mysample from '../components/mysample';
import * as constants from '../constants/AppConstants';
import { addNewData, addTabsCount  } from '../actions/FileActions';



const propTypes = {
  dispatch: PropTypes.func.isRequired,
  input: PropTypes.object,
};

class AppContainer extends Component {
  componentDidMount() {
     alert("component mounted ..")
  }

  render() {
    return (
      <div>
              this is xxxx
              below is sample component
              <Mysample  {...this.props}/>

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
