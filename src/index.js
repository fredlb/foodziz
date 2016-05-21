import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import thunk from 'redux-thunk';
import App from './containers/App';
import Recipes from './containers/Recipes';
import ShoppingLists from './containers/ShoppingLists';
import Planner from './containers/Planner';
import Recipe from './containers/Recipe';
import Start from './components/Start';
import reducers from './reducers';
import './global.css';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const history = useRouterHistory(createHistory)({
	basename: '/'
})

let rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
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
