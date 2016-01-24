import React, { Component, PropTypes } from 'react';

class IngredientsList extends Component {
  render() {
    const { ingredients } = this.props;
    return (
      <ul>
        {
          ingredients.map( (ing) => 
            <li> { ing.name } </li>
        )}
      </ul>
    );
  }
}

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired
};

export default IngredientsList;
