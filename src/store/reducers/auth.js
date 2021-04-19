import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL, LOGOUT } from '../../constants/actionTypes';

const authReducer = (state = { authData: null, isAuthenticated: false }, action) => {
    switch(action.type){
        case AUTH_REQUEST:
            return { loading: true, isAuthenticated: false };
        case AUTH_SUCCESS:
            sessionStorage.setItem('user', JSON.stringify({ ...action.data }))
            //authData: action?.data
            return { ...state, loading: false, isAuthenticated: true, authData: action.data };
        case AUTH_FAIL:
            return { ...state, loading: false, isAuthenticated: false, authData: null, error: action.data };
        case LOGOUT:
            sessionStorage.clear();
            return { ...state, authData: null };
        default: 
            return state;
    }
}
export default authReducer; 