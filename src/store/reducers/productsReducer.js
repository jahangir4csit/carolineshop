import { 
    GET_ALL_PRODUCTS, 
    ALL_PRODUCTS_REQUEST, 
    GET_SELECTED_PRODUCT,
    SELECTED_PRODUCT_FAIL, 
    REQUEST_SELECTED_PRODUCT,
    ALL_PRODUCTS_FAIL,

    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
 } 
    from '../../constants/actionTypes.js';

const initial = {
    products: [],
    product: {},
    categories: [],
    category: {},
    loading: true,
    error: null,
    success: false,
};

// **** Collection: Frontend Reducers  ****

// Product List Reducer
export const productsReducer = (state=initial, action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return {
                    loading: true,
                    products: []
                };
        case GET_ALL_PRODUCTS:
            return {
                    loading: false,
                    products: action.payload
                };
        case ALL_PRODUCTS_FAIL: 
                return {
                    loading: false,
                    error: action.payload
                };
        default: 
            return state;
    }
}

// Product Details Reducer
export const productDetailsReducer = (state = {product: {}, loading: true, error: {} }, action)=>{
    switch(action.type){ 
        case REQUEST_SELECTED_PRODUCT:
            return {
                loading: true, 
            };
        case GET_SELECTED_PRODUCT:
            return {
                loading: false, 
                product: action.payload
            };
        case SELECTED_PRODUCT_FAIL:
            return {
                loading: false, 
                error: action.payload,
            };
        default: 
            return state;
    }
}




// **** Collection: Admin Reducers  ****

// New Product Reducer
export const NewProductReducer = (state = initial, action)=>{
    switch(action.type){
        case NEW_PRODUCT_REQUEST:
            return {
                    ...state,
                    loading: true,
                };
        case NEW_PRODUCT_SUCCESS:
            return {
                    loading: false,
                    ...state,
                    product: action.payload,
                    success: true,
                    error: null
                };
        case NEW_PRODUCT_FAIL: 
                return {
                    ...state,
                    error: action.payload
                };
        default: 
            return state;
    }
}


