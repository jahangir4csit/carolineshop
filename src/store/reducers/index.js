import {combineReducers} from 'redux';
import CartReducer from './cartReducer';
import productReducer from './productReducer';
import loaderReducer from './loaderReducer';
import authReducer from './auth';     

const mainReducer = combineReducers({
    cartStore: CartReducer,
    productStore: productReducer,
    loaderStore: loaderReducer,
    authStore: authReducer,
})
export default mainReducer;