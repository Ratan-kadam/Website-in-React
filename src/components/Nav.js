import React, { Component, PropTypes } from 'react';
import { setActiveAction } from '../actions/FileActions';

const propTypes = {
  dispatch: PropTypes.func,
};

export default class Nav extends Component {
  constructor() {
    super();
  }


  render() {
    let options = this.props.options;

    var itemsWithHtml = this.props.options.map(function(item,index){
          return (<a key={index} className="pull-right" href="#">{item}</a>);
    });

    return (<div className="nav">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <span> Ratan M Kadam </span>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-lg-offset-3 col-md-offset-3 navoption">
                  {itemsWithHtml}
              </div>
              </div>
    </div>)
  }
}

Nav.propTypes = propTypes;
