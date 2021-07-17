import {
    GET_CONTACTS_FAIL,
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESS, 
  } from '../../constants/actionTypes';
/* a reducer is a function that determines
 what previous sate we had,
 and what it should change to after something happens*/


 //auth takes in state, and an action .....(state, action)

 const contacts = (state, {type, payload}) => {

    switch(type){
        
    case GET_CONTACTS_LOADING:
        return {
          ...state,
          getContacts: {
            ...state.getContacts,
            loading: true,
            error: null,
          },
        };
  
      case GET_CONTACTS_SUCCESS:
        return {
          ...state,
          getContacts: {
            ...state.getContacts,
            loading: false,
            data: payload,
            error: null,
          },
        };
  
      case GET_CONTACTS_FAIL:
        return {
          ...state,
          getContacts: {
            ...state.getContacts,
            loading: false,
            error: payload,
          },
        };
  
      default:
        return state;
    }

 };



 export default contacts;