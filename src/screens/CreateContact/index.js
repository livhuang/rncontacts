import React, {useContext, useRef, useState} from 'react';
import { Text, View } from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_LIST} from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import uploadImage from '../../helpers/uploadImage';

//parent component of CreateContactComponent
const CreateContact = () => {
    
    const {
        contactsDispatch, 
        contactsState:{
            createContact:{loading, error} 
        },
    } = useContext(GlobalContext);

    const sheetRef = useRef(null);


    // console.log('contactsState >>: ', contactState);

    const [form, setForm] = useState({});
    const [uploading, setIsuploading] = useState(false);

    const {navigate} = useNavigation();
    // console.log("navigate :>> ", navigate);

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    };

    const [localFile, setLocalFile] = useState(null);

    const onSubmit = () => {

        console.log("localFile :>> ", localFile);

        if(localFile?.size){
            setIsuploading(true);
            uploadImage(localFile)((url) => {
                setIsuploading(false);
                createContact({...form, contactPicture: url})(contactsDispatch)(()=>{
                    navigate(CONTACT_LIST);
                });
            }) ((error) => {
                console.log("error", error);
                setIsuploading(false);
            });

        }

        createContact(form)(contactsDispatch)(()=>{
            navigate(CONTACT_LIST);
        });
    };

    const closeSheet = () => {
        if(sheetRef.current){
            sheetRef.current.close();
        }
    };

    const openSheet = () => {
        if(sheetRef.current){
            sheetRef.current.open();
        }
    };



    const toggleValueChange = () => {
        setForm({...form, "isFavorite": !form.isFavorite});
    };

    const onFileSelected = (image) =>{
        closeSheet();
        setLocalFile(image);
        console.log('images', image);
    };


    console.log('loading:>> ', loading);
    return(
        <CreateContactComponent 
            onSubmit = {onSubmit}
            onChangeText={onChangeText} 
            form={form} 
            setForm={setForm}
            loading={loading || uploading}
            toggleValueChange = {toggleValueChange}
            error={error}
            sheetRef={sheetRef}
            closeSheet={closeSheet}
            openSheet={openSheet}
            onFileSelected = {onFileSelected}
            localFile = {localFile}
            
        />
    );
};

export default CreateContact;