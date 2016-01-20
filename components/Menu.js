import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import menuStyles from './Menu.css';

const { Link } = require('react-router');

const Menu = () => (
    <ul styleName="appMenu">
      <li><Link to="start">Start</Link></li>
      <li><Link to="recipes">Recipes</Link></li>
      <li><Link to="planner">Planner</Link></li>
      <li><Link to="shoppinglists">Shopping Lists</Link></li>
    </ul>
);

export default CSSModules(Menu, menuStyles);
