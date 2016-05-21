import React, { Component, PropTypes } from 'react';
import IngredientsRecipeItem from './IngredientRecipeItem.js';

class IngredientsList extends Component {
  render() {
    const { ingredients } = this.props;
    return (
      <ul>
        {
        ingredients.map( (ing) => (
          <li key={ing.ingredientId}><IngredientsRecipeItem ingredient={ing}/> </li>
          )
        )}
      </ul>
    );
  }
}

IngredientsList.PropTypes = {
  ingredients: PropTypes.array.isRequired
};

export default IngredientsList;
