import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppContainer from '../containers/AppContainer';
import NavContainer from '../containers/NavContainer';
import Splash from '../components/Splash'
import FooterContainer from '../containers/FooterContainer';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  input: PropTypes.object,
};

class ParentContainer extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };

    this.splashTimer = 1000;

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({show: false});
    }, this.splashTimer);
  }

  render() {
    const { show } = this.state;
    if(show) {
      return (<Splash />);
    }

    return (
      <div>
        <NavContainer {...this.props} />
        <AppContainer {...this.props} />
        <FooterContainer {...this.props} />
      </div>
    );
  }
}

ParentContainer.propTypes = propTypes;


function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(ParentContainer);
