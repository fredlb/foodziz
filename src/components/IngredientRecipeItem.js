import React, { Component, PropTypes } from 'react';

class IngredientsRecipeItem extends Component {
  handleAmountChange(event) {
    //TODO: validate
    this.setState({ amount: event.target.value});
    console.log(event.target.value);
  }

  submitAmountChange(e) {
    console.log(e.target.value);
  }

  render() {
    const { ingredient } = this.props;
    return (
      <span>
        <input defaultValue={ingredient.name}/>
        <input defaultValue={ingredient.amount} 
          onChange={this.handleAmountChange.bind(this)}
          onBlur={this.submitAmountChange.bind(this)}/>
        <select value={ingredient.unit}>
          <option>{ingredient.unit}</option>
        </select>
        <button>X</button>
      </span>
    );
  }
}

IngredientsRecipeItem.PropTypes = {
  ingredient: PropTypes.object.isRequired
};

export default IngredientsRecipeItem;
