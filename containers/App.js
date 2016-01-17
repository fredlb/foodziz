import React, { Component, PropTypes } from 'react';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
        <div>
          <Menu/>
          <div>{children}</div>
        </div>
    );
  }
}

export default App;
