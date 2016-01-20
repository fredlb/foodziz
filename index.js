import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { routeReducer } from 'redux-simple-router'
import App from './containers/App';
import Recipes from './containers/Recipes';
import ShoppingLists from './containers/ShoppingLists';
import Planner from './containers/Planner';
import Recipe from './components/Recipe';
import Start from './components/Start';
import configureStore from './store/configureStore';
import reducers from './reducers';
import css from './global.css';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

const store = configureStore(reducer);

let rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="start" component={Start}/>
        <Route path="recipes" component={Recipes}/>
        <Route path="recipe/:id" component={Recipe}/>
        <Route path="planner" component={Planner}/>
        <Route path="shoppinglists" component={ShoppingLists}/>
      </Route>
    </Router>
  </Provider>,
  rootElement
);
