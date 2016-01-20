import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import startStyles from './Start.css';

class Start extends Component {
  render() {
    return(
        <div>
          <img src="../images/corgi_carrier.jpg" />
        </div>
        );
  }
}

export default CSSModules(Start, startStyles);;
