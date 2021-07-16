import { 
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAIL,
    GET_CONTACTS_LOADING, 
} from "../../../constants/actionTypes";
import axios from '../../../helpers/axiosInstance';



export default () => (dispatch) => {
    dispatch({
        type: GET_CONTACTS_LOADING,
    });

    axios
    .get('/contacts/')
    .then((res) => {
        dispatch({
            type: GET_CONTACTS_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_CONTACTS_FAIL,
            payload: err.response
            ? err.response.data 
            : {error: "Somethng went wrong, try again"},
        });
    });
};