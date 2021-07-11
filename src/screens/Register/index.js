import React from 'react';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import RegisterComponent from '../../components/Signup';
import envs from '../../config/env';
import register, { clearAuthState } from '../../context/actions/auth/register';
import axios from '../../helpers/axiosInterceptor';
import {GlobalContext} from '../../context/Provider';
import { LOGIN } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/core';
import { useFocusEffect } from '@react-navigation/native';


const Register = () => {

    const [form, setForm] = useState({});
    const {navigate} = useNavigation();
    const [errors, setErrors] = useState({});
    const {
        authDispatch, 
        authState:{error, loading, data},
    } = useContext(GlobalContext);
    // console.log('form :>> ', form);

    React.useEffect(() => {
        if (data || error){
            navigate(LOGIN);
        }
    },  [data]);

    useFocusEffect(
        React.useCallback(() => {
            return () =>{
                if(data || error){
                    clearAuthState()(authDispatch);
                }
            };

        }, [data, error]),
    );
    

    const onChange=({name, value}) => {
        setForm({...form,[name]: value});

        //if value is not empty
        if(value!==''){

            //check password validation
            if(name == 'password'){     //if password
                if(value.length < 6){   //less than 6 characers
                    setErrors((prev)=>{
                        return {...prev, [name]: 'This field needs min 6 characters'};
                    });
                }else{
                    setErrors((prev)=>{
                        return {...prev, [name]: null};
                    });
                }
            }else{ //else reset
                setErrors((prev)=>{
                    return {...prev, [name]: null};
                });
            }
        //if value is empty, throw error message
        }else{ 
            setErrors((prev)=>{
                return {...prev, [name]: 'This field is required'};
            });
        }
    };


    const onSubmit =() =>{
        
        //validations
        // console.log('form :>> ', form);

        if(!form.userName){
            setErrors((prev)=>{
                return {...prev, userName: "Plase add a username"};
            });
        }
        if(!form.firstName){
            setErrors((prev)=>{
                return {...prev, firstName: "Plase add a first name"};
            });
        }
        if(!form.lastName){
            setErrors((prev)=>{
                return {...prev, lastName: "Plase ad a last name"};
            });
        }
        if(!form.email){
            setErrors((prev)=>{
                return {...prev, email: "Plase add an email"};
            });
        }
        if(!form.password){
            setErrors((prev)=>{
                return {...prev, password: "Plase add a password"};
            });
        }

        //validating if:
        // there are 5 entries in the form (aka form is completed)
        //'every' returns an array, in which each item in the arr is a boolean
        if (Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)
        ){
            register(form)(authDispatch);
        }

    };


    return(
        <RegisterComponent 
            onSubmit ={onSubmit}
            onChange ={onChange}
            form={form} 
            errors={errors}
            error = {error} 
            loading = {loading}
        />
    );
};

export default Register;