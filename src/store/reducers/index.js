import {combineReducers} from 'redux';
import CartReducer from './cartReducer';
import {
    productsReducer, 
    productDetailsReducer, 
    NewProductReducer, 
    NewCategoryReducer, 
    categoriesReducer,
    } from './productsReducer';
import {authReducer} from './authReducer';
import {snackbarReducer} from "./snackbarReducer"; 

export const initialState = {
    auth: {
        loading: false,
        isAuthenticated: false,
        userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null
    }
}
export const mainReducer = combineReducers({
    cartStore: CartReducer,
    productList: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: NewProductReducer,
    newCategory: NewCategoryReducer,
    categories: categoriesReducer,
    auth: authReducer,
    snackbar: snackbarReducer,
})