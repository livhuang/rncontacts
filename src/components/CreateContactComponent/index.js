import React from 'react';
import { View, Text, Switch, Image } from 'react-native';
import Container from '../common/Container';
import styles from './styles/';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import colors from '../../assets/theme/colors';

const CreateContactComponent = ({
    loading,
    error,
    onChangeText,
    setForm,
    onSubmit,
    toggleValueChange,
    form,
}) => {
    // console.log('error: >>', error);
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
                <Input 
                    onChangeText = {(value) => {
                        onChangeText({name: 'firstName', value: value});
                    }}
                    label = "First name" 
                    value={form.firstName || ''}
                    placeholder = "Enter first name"
                    error={error?.first_name?.[0]}
                />
                <Input 
                    error={error?.last_name?.[0]}
                    onChangeText = {(value) => {
                        onChangeText({name: 'lastName', value: value});
                    }}
                    value={form.lastName || ''}
                    label = "Last name" placeholder = "Enter last name"
                />
                <Input 
                    icon={ 
                        <CountryPicker
                            withFilter
                            withFlag
                            countryCode = {form.countryCode || undefined}
                            withCountryNameButton = {false}
                            withCallingCode
                            withCallingCodeButton
                            withEmoji
                            onSelect={(v)=>{
                                const phoneCode = v.callingCode[0];
                                const cCode = v.cca2 //country code
                                setForm({...form, phoneCode, countryCode: cCode});
                                console.log('v :>>', v);
                            }} 
                        />
                    }
                    style = {{paddingLeft: 10}}
                    iconPosition = "left"
                    value={form.phoneNumber || ''}
                    error={error?.phone_number?.[0]}
                    onChangeText = {(value) => {
                        onChangeText({name: 'phoneNumber', value: value});
                    }}
                    label = "Phone number" 
                    placeholder = "Enter phone number"
                />

                {console.log('error: >>', error)}

                <View 
                    style = {{
                        flexDirection: 'row', 
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingVertical: 10,                        
                    }}>
                
                    <Text style = {fontSize = 17}>Add to favorites</Text>

                    <Switch
                        trackColor={{false: 'blue', true: colors.primary}}
                        thumbColor={form.isFavorite ? 'f5dd4b' : 'f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleValueChange}
                        value={form.isFavorite}
                    />
                </View>
 


                <CustomButton 
                    loading = {loading}
                    disabled = {loading} 
                    onPress = {onSubmit}
                    primary 
                    title = "Submit"
                />
            </Container>
        </View>
    );
};

export default CreateContactComponent;