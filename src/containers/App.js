import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import cssStyles from './App.css';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
        <div className={cssStyles.container}>
          <nav className={cssStyles.menu}><Menu/></nav>
          <div className={cssStyles.content}>{children}</div>
        </div>
    );
  }
}

export default App;
