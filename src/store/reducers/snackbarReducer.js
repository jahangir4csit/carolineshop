import { 
    SET_SNACKBAR,
 } 
    from '../../constants/actionTypes.js';

const initialState = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: ""
};

export const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR:
      return {
        ...state,
        snackbarOpen : action.payload.open,
        snackbarType : action.payload.type,
        snackbarMessage : action.payload.message,
      };
    default:
      return state;
  }
};

export const setSnackbar = (open,type,message) => async (dispatch) => {
    const data = {open, type, message};
    try{
        dispatch({ type: SET_SNACKBAR, payload: data })
    }
    catch(error){
        console.log(error);
    }
}