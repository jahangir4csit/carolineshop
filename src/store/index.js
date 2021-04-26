import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {mainReducer, initialState} from './reducers/'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(mainReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
export default store;