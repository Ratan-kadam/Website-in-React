import React, { Component, PropTypes } from 'react';
import { setActiveAction } from '../actions/FileActions';
import Accord from '../components/Accord';

const propTypes = {
  dispatch: PropTypes.func,
};

export default class Footer extends Component {
  constructor() {
    super();
  }


  render() {
    console.log("Footer props");
    console.log(this.props);
    return (<div className="footer">
      <Accord>
              <div>
              <div> text 1 </div>
              <image src="http://www.hutui6.com/data/out/94/67137850-hd-1920x1080-wallpapers.jpg" />
              </div>
              <div>
              <div> text 2 </div>
              <image src="http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/07/HD-Wallpapers-1920x1080-0.jpg" />
              </div>
              <div>
                <div> text 3 </div>
                <image src="http://picview.info/download/20150209/surreal-magic-book-mythology-tree-green-waterfall-abstract-design-creative-1920x1080.jpg" />
                </div>
              <div>
                <div> text 4 </div>
                <image src="http://cdn.wallpapersafari.com/44/7/273xDe.jpg" />
              </div>
      </Accord>

    </div>)
  }
}

Footer.propTypes = propTypes;
