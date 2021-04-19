import {combineReducers} from 'redux';
import CartReducer from './cartReducer';
import productReducer from './productReducer';
import authReducer from './auth';     

const mainReducer = combineReducers({
    cartStore: CartReducer,
    productStore: productReducer,
    authStore: authReducer,
})
export default mainReducer;