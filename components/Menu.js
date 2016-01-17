import React, { Component, PropTypes } from 'react';
const { Link } = require('react-router');

const Menu = () => (
    <ul>
      <li><Link to="recipes">Recipes</Link></li>
      <li><Link to="planner">Planner</Link></li>
      <li><Link to="shoppinglists">Shopping Lists</Link></li>
    </ul>
);

export default Menu;
