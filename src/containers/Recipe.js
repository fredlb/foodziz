import React, { Component, PropTypes } from 'react';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IngredientsList from '../components/IngredientsList';

class Recipe extends Component {
  componentWillReceiveProps(nextProps) {
    const newId = nextProps.params.id;
    const oldId = this.props.params.id;
    if (newId !== oldId) 
      this.fetchRecipe(newId);
  }

  componentDidMount() {
    const { params }  = this.props;
    this.fetchRecipe(params.id);
  }

  fetchRecipe(id) {
    const { actions }  = this.props;
    actions.fetchRecipe(id);
  }

  render() {
    const { recipe } = this.props;

    var content;
    if (recipe.title) {
      content = 
        <div>
          { recipe.title }
          <IngredientsList ingredients={recipe.ingredients} />
          <button>Add ingredient</button>
        </div>;
    } else {
      content = <div>Loading...</div>;
    }

    return(
      <div>
        { content }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.currentRecipe
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
