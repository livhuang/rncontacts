import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import RegisterComponent from '../../components/Signup';
import envs from '../../config/env';
import axiosInstance from '../../helpers/axiosInterceptor';

const Register = () => {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    React.useEffect (() => {
        axiosInstance.get("/contacts").catch(err=>{
            console.log('error: >>', err.response);
        });
    }, []);

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
        console.log('form :>> ', form);

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
    };


    return(
        <RegisterComponent 
            onSubmit ={onSubmit}
            onChange ={onChange}
            form={form} 
            errors={errors}
        />
    );
};

export default Register;