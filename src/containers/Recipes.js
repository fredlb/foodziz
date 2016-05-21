import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchRecipes } from '../actions';

class Recipes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchRecipes());
  }

  render() {
    const { recipes } = this.props;
    var content;
    if ( Object.is(recipes,[])) {
      content = <div>Loading...</div>;
    } else {
      content = 
        <ul>
          {recipes.map((recipe) => (
            <li>
              <Link to={`recipe/${recipe.id}`}>
                <p>{recipe.title}</p>
              </Link>
            </li>
          ))
          }
       </ul>
    }

    return (
      <div>
        {content}
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

  return {
    recipes: recipesById
  };
}

export default connect(
    mapStateToProps
)(Recipes);
