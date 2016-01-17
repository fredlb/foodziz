import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import cssStyles from './App.css';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
        <div styleName="container">
          <nav styleName="menu"><Menu/></nav>
          <div styleName="children">{children}</div>
        </div>
    );
  }
}

export default CSSModules(App, cssStyles);
