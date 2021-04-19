import { 
    GET_ALL_PRODUCTS,  
    GET_SELECTED_PRODUCT,
    SELECTED_PRODUCT_FAIL, 
    REQUEST_SELECTED_PRODUCT,
    ALL_PRODUCTS_FAIL,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
 } 
    from '../../constants/actionTypes.js';

const initial = {
    product: {},
    products: [],
    loading: true,
    error: {}
};
const productReducer = (state=initial, action)=>{
    switch(action.type){
        case REQUEST_SELECTED_PRODUCT:
            return {
                ...state,
                loading: true, 
            };
        case GET_SELECTED_PRODUCT:
            return {
                loading: false, 
                product: action.payload,
            };
        case SELECTED_PRODUCT_FAIL:
            return {
                ...state, 
                error: null,
            };
        case GET_ALL_PRODUCTS:
            return {
                    ...state,
                    loading: false,
                    products: action.payload
                };
        case CREATE_PRODUCT:
            return {...state, product: action.payload};
        case UPDATE_PRODUCT:
            return {...state, product: action.payload};
        case DELETE_PRODUCT:
            return {...state, product: action.payload}; 
        default: 
            return state;
    }
}
export default productReducer;