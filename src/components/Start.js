import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import startStyles from './Start.css';
import corgieCarrier from '../images/corgi_carrier.jpg';

class Start extends Component {
  render() {
    return(
        <div>
          <img src={corgieCarrier} />
        </div>
        );
  }
}

export default Start;
