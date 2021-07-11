import React from 'react'

import { Text, View, TextInput, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import { onChange } from 'react-native-reanimated';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/routeNames';
import Message from '../../components/common/Message'

const LoginComponent = ({error, onChange, loading, onSubmit}) => {
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
            <Text style = {styles.subTitle}>Please Login here</Text>


            <View style = {styles.form} >

                {/*check if error, but not local error */}
                {error && !error.error && (
                    <Message onDismiss = {() => {}} danger message ="invalid credentials" />
                
                )}

            {error?.error && (
                <Message 
                    danger
                    onDismiss
                    retryFn = {onSubmit}
                    message = {error?.error}
                />
            )}




                <Input
                    label = "Username"
                    iconPosition="right"
                    placeholder="Enter Username"
                    onChangeText = {(value) =>{
                        onChange({name: "userName", value});
                    }}
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

                />
                <CustomButton 
                    disabled = {loading}
                    onPress={onSubmit} 
                    loading = {loading}
                    primary 
                    title ="Submit" 
                />

                <View style = {styles.createSection}>
                    <Text style = {styles.infoText}>Need a new account?</Text>
                    <TouchableOpacity 
                        onPress={()=>{
                            navigate(REGISTER);
                        }}>
                        <Text style = {styles.linkBtn}>Register</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

   
    </Container>

    );

};

export default LoginComponent;