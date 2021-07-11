
/* a reducer is a function that determines
 what previous sate we had,
 and what it should change to after something happens*/

import { 
    REGISTER_FAIL, 
    REGISTER_LOADING, 
    REGISTER_SUCCESS,
    CLEAR_AUTH_STATE, 
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "../../constants/actionTypes";


 //auth takes in state, and an action .....(state, action)

 const auth = (state, {type, payload}) => {

    switch(type){
        case LOGIN_LOADING:
        case REGISTER_LOADING:
            return{
                ...state,
                loading: true,
            };
        
        //if success, set loading to false && set data to payload
        case REGISTER_SUCCESS:  
            return{
                ...state,
                loading: false,
                data:payload, 
            };
        

        case LOGIN_SUCCESS:  
            return{
                ...state,
                loading: false,
                data:payload, 
                isLoggedIn: true,
            };

        case REGISTER_FAIL:  
        case LOGIN_FAIL:
            return{
                ...state,
                loading: false,
                error: payload, 
            };


        case CLEAR_AUTH_STATE:
            return{
                ...state,
                loading: false,
                data: null, 
                error: null,
            };

        
        default:
            return state;
    }

 };



 export default auth;