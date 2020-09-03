// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';
import ajaxMiddleware from '../middleware/ajaxMiddleware';
import authMiddleware from '../middleware/authMiddleware';

// import filtersMiddleware from '../middleware/filtersMiddleware';


// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    ajaxMiddleware,
    authMiddleware,
    // filtersMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
