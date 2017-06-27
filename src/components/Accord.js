import React, { Component, PropTypes } from 'react';
import { setActiveAction } from '../actions/FileActions';

const propTypes = {
  dispatch: PropTypes.func,
};

export default class Accord extends Component {
  constructor() {
    super();
  }

  render() {
    let list = this.props.children;
    var dataWithHtml = list.map(function(item,index){
       return (<div className="innerBox">
              <div className="ab50">{item.props.children[0]}</div>
               {item.props.children[1]}
       </div>);
    });

    return (<div className="outerBox">
          {dataWithHtml}
       </div>)
  }
}

Accord.propTypes = propTypes;
