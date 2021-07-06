import React from 'react'

import { Text, View, TextInput, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames';

const RegisterComponent = () => {
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

            <View style = {styles.form} >

                <Input
                    label = "Username"
                    iconPosition="right"
                    placeholder="Enter Username"
                    // error={"This field is required"}
                />
                
                <Input
                    label = "First Name"
                    iconPosition="right"
                    placeholder="Enter First Name"
                    // error={"This field is required"}
                />

                <Input
                    label = "Last Name"
                    iconPosition="right"
                    placeholder="Enter Last Name"
                    // error={"This field is required"}
                />
                
                <Input
                    label = "Email"
                    iconPosition="right"
                    placeholder="Enter Email"
                    // error={"This field is required"}
                />


                <Input
                    label = "Password"
                    placeholder="Enter Password"
                    secureTextEntry = {true}
                    icon={<Text>Show</Text>}
                    iconPosition="right"
                />

                <CustomButton primary title ="Submit" />

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