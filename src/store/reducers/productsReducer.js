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

    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,

    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,

 } 
    from '../../constants/actionTypes.js';

const initial = {
    products: [],
    product: {},
    loading: true,
    error: null,
    success: false,
    isUpdated: false,
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
export const productDetailsReducer = (state = initial, action)=>{
    switch(action.type){ 
        case REQUEST_SELECTED_PRODUCT:
            return {
                loading: true, 
                ...state, 
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

// New Product Reducer
export const UpdateProductReducer = (state = initial, action)=>{
    switch(action.type){
        case UPDATE_PRODUCT_REQUEST:
            return {
                    ...state,
                    loading: true,
                };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    isUpdated: action.payload,
                    error: null
                };
        case UPDATE_PRODUCT_RESET: 
            return{
                isUpdated: false
            }
        case UPDATE_PRODUCT_FAIL: 
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
        default: 
            return state;
    }
}


// DELETE Product Reducer
export const DeleteProductReducer = (state = initial, action)=>{
    switch(action.type){
        case DELETE_PRODUCT_REQUEST:
            return {
                    ...state,
                    loading: true,
                };
        case DELETE_PRODUCT_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    isDeleted: action.payload,
                    error: null,
                };
        case DELETE_PRODUCT_RESET: 
                return{
                    ...state,
                    isDeleted: false,
                }
        case DELETE_PRODUCT_FAIL: 
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
        default: 
            return state;
    }
}
