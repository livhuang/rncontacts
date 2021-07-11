import React from 'react'
import { Text, View, TextInput, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames';
import Message from '../common/Message';


const RegisterComponent = ({onSubmit, onChange, form, loading, error, errors}) => {
    const {navigate} = useNavigation();
    return(
        <Container>
        {/* <Text> Hi from Login</Text> */}

        <Image 
            height ={70} 
            width={70} 
            source ={require('../../assets/images/logo.png')} 
            style ={styles.logoImage}
        />



        <View>
            
            <Text style = {styles.title}>Welcome to RNContacts</Text>
            <Text style = {styles.subTitle}>Create a free account</Text>

            <View style = {styles.form}>
                {error?.error && (
                    <Message 
                        retry
                        danger
                        retryFn = {onSubmit}
                        message = {error?.error}
                    />
                )}
                <Input
                    label = "Username"
                    iconPosition="right"
                    placeholder="Enter Username"
                    error = {errors.userName || error?.username?.[0]}
                    onChangeText = {(value) =>{
                        onChange({name: "userName", value});
                    }}
                />
                
                <Input
                    label = "First Name"
                    iconPosition="right"
                    placeholder="Enter First Name"
                    onChangeText = {(value) =>{
                        onChange({name: "firstName", value});
                    }}
                    error={errors.firstName || error?.first_name?.[0]}
                />

                <Input
                    label = "Last Name"
                    iconPosition="right"
                    placeholder="Enter Last Name"
                    onChangeText = {(value) =>{
                        onChange({name: "lastName", value});
                    }}
                    error={errors.lastName || error?.last_name?.[0]}
                />
                
                <Input
                    label = "Email"
                    iconPosition="right"
                    placeholder="Enter Email"
                    onChangeText = {(value) =>{
                        onChange({name: "email", value});
                    }}
                    error={errors.email || error?.email?.[0]} 
                />


                <Input
                    label = "Password"
                    placeholder="Enter Password"
                    secureTextEntry = {true}
                    icon={<Text>Show</Text>}
                    iconPosition="right"
                    onChangeText = {(value) =>{
                        onChange({name: "password", value});
                    }}
                    error={errors.password || error?.password?.[0]}
                />

                {console.log('error', error)}
                <CustomButton 
                    loading={loading} 
                    onPress={onSubmit} 
                    disabled = {loading}
                    primary 
                    title ="Submit" 
                />

                <View style = {styles.createSection}>
                    <Text style = {styles.infoText}>Already have an account?</Text>
                    <TouchableOpacity 
                        onPress={()=>{
                            navigate(LOGIN);
                        }}>
                        <Text style = {styles.linkBtn}>Login</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

   
    </Container>

    );

};

export default RegisterComponent;