import { 
    NEW_CATEGORY_REQUEST,
    NEW_CATEGORY_SUCCESS,
    NEW_CATEGORY_FAIL,

    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    NEW_CATEGORY_RESET,

    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY_RESET,

    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    UPDATE_CATEGORY_RESET,

    DETAILS_CATEGORY_REQUEST,
    DETAILS_CATEGORY_SUCCESS,
    DETAILS_CATEGORY_FAIL,

 } 
    from '../../constants/actionTypes.js';

const initial = {
    categories: [],
    category: {},
    loading: true,
    error: null,
    success: false,
    isDeleted: false
};
    

// New Category Reducer
export const NewCategoryReducer = (state = initial, action)=>{
    switch(action.type){
        case NEW_CATEGORY_REQUEST:
            return {
                    ...state,
                    loading: true,
                };
        case NEW_CATEGORY_SUCCESS:
            return {
                    loading: false,
                    ...state,
                    category: action.payload,
                    success: true,
                    error: null,
                };
        case NEW_CATEGORY_RESET: 
                return{
                    success: false
                }
        case NEW_CATEGORY_FAIL: 
                return {
                    ...state,
                    error: action.payload
                };
        default: 
            return state;
    }
}


// Categories Reducer
export const categoriesReducer = (state=initial, action)=>{
    switch(action.type){
        case ALL_CATEGORY_REQUEST:
            return {
                    loading: true,
                    categories: []
                };
        case ALL_CATEGORY_SUCCESS:
            return {
                    loading: false,
                    categories: action.payload
                };
        case ALL_CATEGORY_FAIL: 
                return {
                    loading: false,
                    error: action.payload
                };
        default: 
            return state;
    }
}

// delete Category Reducer
export const DeleteCategoryReducer = (state = initial, action)=>{
    switch(action.type){
        case DELETE_CATEGORY_REQUEST:
            return {
                    ...state,
                    loading: true,
                };
        case DELETE_CATEGORY_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    isDeleted: action.payload,
                    error: null,
                };
        case DELETE_CATEGORY_RESET: 
                return{
                    ...state,
                    isDeleted: false,
                }
        case DELETE_CATEGORY_FAIL: 
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
        default: 
            return state;
    }
}


// Category Details Reducer
export const categoryDetailsReducer = (state = initial, action)=>{
    switch(action.type){ 
        case DETAILS_CATEGORY_REQUEST:
            return {
                loading: true,
                ...state, 
            };
        case DETAILS_CATEGORY_SUCCESS:
            return {
                loading: false, 
                category: action.payload
            };
        case DETAILS_CATEGORY_FAIL:
            return {
                loading: false, 
                error: action.payload,
            };
        default: 
            return state;
    }
}

// edit Category Reducer
export const updateCategoryReducer = (state = initial, action)=>{
    switch(action.type){
        case UPDATE_CATEGORY_REQUEST:
            return {
                    ...state,
                    loading: true,
                };
        case UPDATE_CATEGORY_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    isUpdated: action.payload,
                    error: null,
                };
        case UPDATE_CATEGORY_RESET: 
                return{
                    isUpdated: false
                }
        case UPDATE_CATEGORY_FAIL:    
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
        default: 
            return state;
    }
}
