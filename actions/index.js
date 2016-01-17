import * as _ from 'lodash';
export const CREATE_SHOPPINGLIST = "CREATE_SHOPPINGLIST";

export function createShoppingList() {
  return (dispatch, getState) => {
    const state = getState();
    const recipes = Object.assign({}, state.recipes.recipes);
    const days = state.planner.days;
    const uniqIngredients = days.map((day) => 
        Object.assign({}, recipes[day.recipeId]))
    .reduce((ingredients, recipe) => {
      return ingredients.concat(recipe.ingredients);
    }, [])
    .reduce((ingredients, ing) => {
      if (ingredients[ing.ingredientId]) {
        ingredients[ing.ingredientId] = Object.assign({},
          ingredients[ing.ingredientId], {
            amount: ingredients[ing.ingredientId].amount + ing.amount
        });
      } else {
        ingredients[ing.ingredientId] = Object.assign({},ing);
      }
      return ingredients;
    }, {});
    return dispatch(test(_.values(uniqIngredients)));
  }
}

function test(ing) {
  return {
    type: CREATE_SHOPPINGLIST,
    ing
  }
}
