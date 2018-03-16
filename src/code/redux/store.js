import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import reducers from './reducers';

const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav
)

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk, createLogger(), navMiddleware)
    )
);

export default store;
