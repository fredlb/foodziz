import React, { Component } from 'react';
import { connect } from 'react-redux';

class Planner extends Component {
  render() {
    const { days } = this.props;
    return (
        <div>
        { days.map((day) =>
            <p key={day.day.id}>{day.day.name} - {day.recipe.title}</p>
            )}
        </div>
    );
  }
}

function mapStateToProps(state) {
  const days = state.planner.days;
  const recipes = state.recipes.recipes;
  const daysWithRecipes = days.map((day) => {
    return {
      day: day,
      recipe: recipes[day.recipeId]
    }}
  );

  console.log(daysWithRecipes);

  return {
    days: daysWithRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Planner);
