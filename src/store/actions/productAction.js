import * as api from '../../api';

export const getProducts = () => async (dispatch) => {
    try{
        const { data } = await api.getProducts()
        dispatch({ type: 'GET_ALL_PRODUCTS', payload: data })
    }
    catch(error){
        console.log(error.message)
    }
}

export const createProduct = (post) => async (dispatch) => {
    try{
        const { data } = await api.createProduct(post)
        dispatch({ type: 'CREATE_PRODUCT', payload: data })
    }
    catch(error){
        console.log(error)
    }
}

export const getSelectedProduct = (data)=>{
    return{
        type: 'GET_SELECTED_PRODUCT',
        payload: data, 
    }
}