import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import mapKeys from 'lodash/object/mapKeys';
import * as Actions from '../actions';

class ShoppingLists extends Component {
  renderShoppingList() {
  }
  render() {
    const { ing, actions } = this.props;
    return (
        <div>
          <button onClick={actions.createShoppingList}>Create shopping list</button>
          <ul>
          {ing ? 
          ing.map((ingredient) =>
              <li key={ingredient.ingredientId}>{ingredient.name} - {ingredient.amount}{ingredient.unit}</li>
          ): null}
          </ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ing: state.shoppinglists.ing
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
)(ShoppingLists);
