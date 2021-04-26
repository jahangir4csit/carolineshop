import { 
    AUTH_REQUEST, 
    AUTH_SUCCESS, 
    AUTH_FAIL, 
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    USER_REG_REQUEST,
    USER_REG_SUCCESS,
    USER_REG_FAIL, 
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
} from '../../constants/authConstants';

const initial = {
    userInfo: {}, isAuthenticated: false, loading: false, error: null
};

export const authReducer = (state = initial, action) => {
    switch(action.type){
        case AUTH_REQUEST:
        case USER_REG_REQUEST:
        case LOAD_USER_REQUEST:
            return { loading: true, isAuthenticated: false };

        case AUTH_SUCCESS:
        case USER_REG_SUCCESS:
        case LOAD_USER_SUCCESS:
            //sessionStorage.setItem('userInfo', JSON.stringify({ ...action.payload }))
            return { ...state, loading: false, isAuthenticated: true, userInfo: action.payload };
        case LOAD_USER_FAIL: 
            return { loading: false, isAuthenticated: false, userInfo: null, error: action.payload }
        case AUTH_FAIL:
        case USER_REG_FAIL:
            return {loading: false, isAuthenticated: false, userInfo: null, error: action.payload };
        case LOGOUT_SUCCESS:
            sessionStorage.clear();
            return { loading: false, isAuthenticated: false, userInfo: null };
        case LOGOUT_FAIL:
            return { ...state, error: action.payload };
        default: 
            return state;
    }
}