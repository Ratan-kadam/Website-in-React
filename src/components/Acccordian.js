import React, { Component, PropTypes } from 'react';
import { setActiveAction } from '../actions/FileActions';

const propTypes = {
  dispatch: PropTypes.func,
};

export default class Acccordian extends Component {
  constructor() {
    super();
  }

  render() {
    console.log("Accordian props");
    console.log(this.props);
    let list = this.props.accordianList;
    var dataWithHtml = list.map(function(item,index){
       return (<div  key={index} className="innerBox">
               <image src={item.image} />
               </div>);
    });

    return (<div className="outerBox">
            {dataWithHtml}
       </div>)
  }
}

Acccordian.propTypes = propTypes;
