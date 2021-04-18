const initial = {
    selectedProduct: {},
    products: [],
};
const productReducer = (state=initial, action)=>{
    switch(action.type){
        case 'GET_SELECTED_PRODUCT':
            return {...state, selectedProduct: action.payload};
        case 'GET_ALL_PRODUCTS':
            return {...state, products: action.payload};
        case 'CREATE_PRODUCT':
            return {...state, product: action.payload};
        case 'UPDATE_PRODUCT':
            return {...state, product: action.payload};
        case 'DELETE_PRODUCT':
            return {...state, product: action.payload}; 
        default: 
            return state;
    }
}
export default productReducer;