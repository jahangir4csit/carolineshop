import {combineReducers} from 'redux';
import CartReducer from './cartReducer';
import {
    productsReducer, 
    productDetailsReducer, 
    NewProductReducer,
    UpdateProductReducer, 
    DeleteProductReducer,
    } from './productsReducer';
import {
    NewCategoryReducer, 
    categoriesReducer,
    DeleteCategoryReducer,
    updateCategoryReducer,
    categoryDetailsReducer
    } from './categoryReducer';

import {
    usersReducer,
    NewUserReducer,
    DeleteUserReducer,
    updateUserReducer,
    getUserReducer
} from './userReducer';
import {authReducer, loadReducer} from './authReducer';
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
    updateProduct: UpdateProductReducer,
    deleteProduct: DeleteProductReducer,
    newCategory: NewCategoryReducer,
    deleteCategory: DeleteCategoryReducer,
    updateCategory: updateCategoryReducer,
    categoryDetails: categoryDetailsReducer,
    categories: categoriesReducer,
    users: usersReducer,
    newUser: NewUserReducer,
    deleteUser: DeleteUserReducer,
    getUser: getUserReducer,
    updateUser: updateUserReducer,
    auth: authReducer,
    loadUser: loadReducer,
    snackbar: snackbarReducer,
})