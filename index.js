import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { routeReducer } from 'redux-simple-router'
import { syncHistory } from 'redux-simple-router'
import thunk from 'redux-thunk';
import App from './containers/App';
import Recipes from './containers/Recipes';
import ShoppingLists from './containers/ShoppingLists';
import Planner from './containers/Planner';
import Recipe from './containers/Recipe';
import Start from './components/Start';
import reducers from './reducers';
import './global.css';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  thunk
)(createStore)

function configureStore(rootReducer) {
  const store = createStoreWithMiddleware(rootReducer);
  reduxRouterMiddleware.listenForReplays(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

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
