import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/common/Container';
import Icon from "../../components/common/Icon";

const Contacts = () => {

    const {setOptions, toggleDrawer} = useNavigation();
    React.useEffect(() => {
        setOptions({
            headerLeft: () => (
            <TouchableOpacity 
                onPress={()=>{
                    toggleDrawer();
                }}>
                <Icon type="material" style = {{padding:10}} size = {25} name = "menu">  </Icon>
            </TouchableOpacity> 
            ),
        });
    },[]); 
    return(
        <Container>
            <Text> Hi from contacts</Text>
        </Container>
    );
};


export default Contacts;