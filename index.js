import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router'
import thunk from 'redux-thunk';
import App from './containers/App';
import Recipes from './containers/Recipes';
import ShoppingLists from './containers/ShoppingLists';
import Planner from './containers/Planner';
import configureStore from './store/configureStore';
import reducers from './reducers';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, thunk)(createStore)

const store = createStoreWithMiddleware(reducer);
reduxRouterMiddleware.syncHistoryToStore(store);
let rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="recipes" component={Recipes}/>
        <Route path="planner" component={Planner}/>
        <Route path="shoppinglists" component={ShoppingLists}/>
      </Route>
    </Router>
  </Provider>,
  rootElement
);
