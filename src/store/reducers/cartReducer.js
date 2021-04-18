
const initial = {
    products: [],
    cart: [],
    total: 0,
};

const CartReducer = (state=initial, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            let newItem = action.payload;
            return {
                ...state,
                 cart: [...state.cart.concat(newItem)],
                 total: state.total + 1,
            };

        default: 
            return state;
    }
}
export default CartReducer;