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
     return (
       <div className="topnav" id="myTopnav">
       <div className="row">
       <div className="col-xs-12 col-sm-6">
         <a href="#home">Ratan.Kadam@Gmail.Com</a>
       </div>
         <div className="col-xs-12 col-sm-6 topnav__options">
           <a href="#contact">Contact</a>
           <a href="#about">About</a>
            <a href="#home">Home</a>
         </div>
       </div>
       </div>
   );
 }
}

Nav.propTypes = propTypes;
