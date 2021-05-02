import { 

    ALL_USER_REQUEST,
    ALL_USER_SUCCESS,
    ALL_USER_FAIL,

    GET_SELECTED_USER,
    REQUEST_SELECTED_USER,
    SELECTED_USER_FAIL, 

    NEW_USER_REQUEST,
    NEW_USER_SUCCESS,
    NEW_USER_FAIL,
    NEW_USER_RESET,

    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_RESET,

    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_RESET,

 } 
    from '../../constants/actionTypes.js';

const initial = {
    users: [],
    userDetails: {},
    loading: true,
    error: null,
    success: false,
    isDeleted: false,
    isUpdated: false
};

// Users Reducer
export const usersReducer = (state=initial, action)=>{
    switch(action.type){
        case ALL_USER_REQUEST:
            return {
                    loading: true,
                    users: []
                };
        case ALL_USER_SUCCESS:
            return {
                    loading: false,
                    users: action.payload
                };
        case ALL_USER_FAIL: 
                return {
                    loading: false,
                    error: action.payload
                };
        default: 
            return state;
    }
}

// New User Reducer
export const NewUserReducer = (state = initial, action)=>{
    switch(action.type){
        case NEW_USER_REQUEST:
            return {
                    ...state,
                    loading: true,
                };
        case NEW_USER_SUCCESS:
            return {
                    loading: false,
                    ...state,
                    user: action.payload,
                    success: true,
                    error: null,
                };
        case NEW_USER_RESET: 
                return{
                    success: false
                }
        case NEW_USER_FAIL: 
                return {
                    ...state,
                    error: action.payload
                };
        default: 
            return state;
    }
}

// delete User Reducer
export const DeleteUserReducer = (state = initial, action)=>{
    switch(action.type){
        case DELETE_USER_REQUEST:
            return {
                    ...state,
                    loading: true,
                };
        case DELETE_USER_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    isDeleted: action.payload,
                    error: null,
                };
        case DELETE_USER_RESET: 
                return{
                    ...state,
                    isDeleted: false,
                }
        case DELETE_USER_FAIL: 
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
        default: 
            return state;
    }
}

// User Details Reducer
export const getUserReducer = (state = initial, action)=>{
    switch(action.type){ 
        case REQUEST_SELECTED_USER:
            return {
                loading: true,
                ...state, 
            };
        case GET_SELECTED_USER:
            return {
                loading: false, 
                userDetails: action.payload
            };
        case SELECTED_USER_FAIL:
            return {
                loading: false, 
                error: action.payload,
            };
        default: 
            return state;
    }
}


// edit User Reducer
export const updateUserReducer = (state = initial, action)=>{
    switch(action.type){
        case UPDATE_USER_REQUEST:
            return {
                    ...state,
                    loading: true,
                };
        case UPDATE_USER_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    isUpdated: action.payload,
                    error: null,
                };
        case UPDATE_USER_RESET: 
                return{
                    isUpdated: false
                }
        case UPDATE_USER_FAIL:    
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
        default: 
            return state;
    }
}