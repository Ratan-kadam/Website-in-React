import React, { Component, PropTypes } from 'react';

const propTypes = {
  dispatch: PropTypes.func,
};

export default class CoverPage extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="intro-header">
      <div className="video-container">
          <video width="99%" id="the-video" autoPlay="autoPlay" loop>
              <source src="../src/img/Workaholic.mp4" type="video/mp4" />
              Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
          <div className="container overlay">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12">
                  <h1 className="animateddelay zoomInUp">
                    Ratan M. Kadam
                  </h1>
                  <h3>
                    UI Engineer
                  </h3>
                  <hr className="intro-divider animated lightSpeedIn" />
                  <ul className="list-inline intro-social-buttons">
                    <li>
                      <a href="https://github.com/Ratan-kadam" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span> </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/RatanKadam" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/kadam.ratan" className="btn btn-default btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className="network-name">Facebook</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
    }
}

CoverPage.propTypes = propTypes;
