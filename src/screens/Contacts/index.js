import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from "../../components/common/Icon";
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from "../../context/Provider";

const Contacts = () => {

    const {setOptions, toggleDrawer} = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const {
        contactsDispatch,
        contactsState: {
            getContacts: {data,loading},
        } ,
    } = useContext(GlobalContext);

    console.log('data', data);
    console.log('loading', loading);

    useEffect(() => {
        getContacts()(contactsDispatch);
    }, []);


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
        <ContactsComponent 
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible}
            data = {data}
            loading = {loading}
        />
    );
};


export default Contacts;