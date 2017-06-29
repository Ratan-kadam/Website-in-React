import React, { Component, PropTypes } from 'react';

const propTypes = {
  dispatch: PropTypes.func,
};

export default class AboutMe extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
          <div className="row">
            <div className="col-sm-offset-5 col-sm-2 dashLine" />
          </div>
          <div className="row">
            <div className="col-sm-offset-5 col-sm-3 headingBlue">
              About Me
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 textFont aboutMe flex">
              <div className="hidden-xs"> <img src="../src/img/ratan.jpg" /> </div>
              <ul>
                <li>Graduate student at San Jose State University majoring in Software
                  Engineering, specialized in <span class="strong headingBlue">Front end </span>-
                  Web and cross platform <span class="strong headingBlue"> Mobile application </span> development.
                </li>
                <li><span class="middle">  4 </span>years of experience in software
                  industry with various development and testing in Enterprise
                  services domain, covering a wide range of skill set, roles
                  and industry verticals. Worked in all phases of SDLC (analysis,
                  design, development, testing, implementation) and has a strong
                  focus on the quality of the deliverables at each phase.
                </li>
                <li>Good concepts and understanding of Design Patterns, Web Services, REST API, Agile
                  Development, Jenkins, Bower, Grunt, Git </li>
                <li>Effective customer interaction skills. Self – motivated and a
                  good team player.
                </li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

AboutMe.propTypes = propTypes;
