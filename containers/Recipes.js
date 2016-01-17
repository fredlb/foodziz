import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Recipes extends Component {
  render() {
    const { recipes } = this.props;
    return (
        <div>
        {recipes.map((recipe) => 
            <div key={recipe.id}>
            <p>{recipe.title}</p>
            <ul>
            {recipe.ingredients.map((ing) => 
                <li key={ing.ingredientId}>{ing.name} - {ing.amount}{ing.unit}</li>
              )}
            </ul>
            </div>
        )}
        {this.props.children}
        </div>
    );
  }
}

function mapStateToProps(state) {
  const recipes = state.recipes.recipes;
  const recipesIds = state.recipes.recipesIds;
  const recipesById = recipesIds.map((id) => 
    recipes[id]
  );
  console.log(recipesById);

  return {
    recipes: recipesById
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);
