import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/'

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
//const store = createStore(mainReducer, composeEnhancers());

const store = createStore(mainReducer, compose(applyMiddleware(thunk)));
export default store;