import { CREATE_SHOPPINGLIST } from '../actions';

const initRecipes = {
  recipesIds: [1,2],
  recipes: {
    1: {
      id: 1,
      title: "Köttfärssås m. spaghetti",
      ingredients: [
      {
        "ingredientId": 1,
        "name": "Nötfärs",
        "amount": 400,
        "unit": "gram"
      },
      {
        "ingredientId": 2,
        "name": "Krossade tomater",
        "amount": 500,
        "unit": "gram"
      }
      ],
      "cookingTime": 80
    },
    2: {
      id: 2,
      title: "Spenatpaj",
      ingredients: [
      {
        "ingredientId": 3,
        "name": "Spenat",
        "amount": 100,
        "unit": "gram"
      },
      {
        "ingredientId": 4,
        "name": "Smör",
        "amount": 114,
        "unit": "gram"
      }
      ],
      "cookingTime": 45 
    }
  }
};

const initPlanner = {
  days: [
    {
      "id": 1,
      "name": "Monday",
      "recipeId": 1
    },
    {
      "id": 2,
      "name": "Tuesday",
      "recipeId": 1
    }
  ]
};

const initIngredients = {
  ingredientsId: [1,2],
  ingredients: {
    1: {
      "name": "Nötfärs",
      "tags": ["meat"]
    },
    2: {
      "name": "Krossade tomater",
      "tags": ["can", "vegetable"]
    },
    3: {
      "name": "Spenat",
      "tags": ["vegetable"]
    },
    4: {
      "name": "Smör",
      "tags": ["dairy"]
    },

  }
}

const initShoppingList = {};

function recipes(state = initRecipes, action) {
  return state;
}

function planner(state = initPlanner, action) {
  return state;
}

function ingredients(state = initIngredients, action) {
  return state;
}

function shoppinglists(state = initShoppingList, action) {
  switch(action.type) {
    case CREATE_SHOPPINGLIST:
      return {...state,ing:  Object.assign([], action.ing)};
    default:
      return state;
  }
}

export default {
  recipes: recipes,
  planner: planner,
  ingredients: ingredients,
  shoppinglists: shoppinglists
};
