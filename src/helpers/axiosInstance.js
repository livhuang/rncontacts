import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import envs from "../config/env";
import { CREATE_CONTACT } from "../constants/routeNames";
import { navigate } from "../navigations/SideMenu/RootNavigator";


let headers ={};


const axiosInstance = axios.create({
    baseURL:envs.BACKEND_URL,
    headers,
});


//create request interceptor
axiosInstance.interceptors.request.use(
    async (config) => {
        
        navigate(CREATE_CONTACT);



        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }


        return config;
    }, 
    (error)=>{
        return Promise.reject(error);
    },
);

export default axiosInstance;