import React from 'react';
import { View, Text, Image } from 'react-native';
import Container from '../common/Container';
import styles from './styles/';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';


const CreateContactComponent = () => {
    return (
        <View style = {styles.container}>
            <Container>
                <Image 
                    width = {150} 
                    height= {150}
                    source = {{uri: DEFAULT_IMAGE_URI}} 
                    style = {styles.imageView}
                />
                <Text style = {styles.chooseText}>Choose image</Text>
                <Input label = "First name" placeholder = "Enter first name"/>
                <Input label = "Last name" placeholder = "Enter last name"/>
                <Input 
                    icon={ 
                        <CountryPicker
                            withFilter
                            withFlag
                            withCountryNameButton = {false}
                            withCallingCode
                            withEmoji
                            onSelect={()=>{}} //onSelect is what happens when a user picks a country
                        />
                    }
                    style = {{paddingLeft: 10}}
                    iconPosition = "left"
                    label = "Phone number" 
                    placeholder = "Enter phone number"
                />
                <CustomButton primary title = "Submit"/>
            </Container>
        </View>
    );
};

export default CreateContactComponent;