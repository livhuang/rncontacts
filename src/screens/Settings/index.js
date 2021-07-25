import React from 'react';
import { Text, View } from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';

const Settings = () => {

    //settingsOptions is an array contating a title, subtitle, and onPress
    const settingsOptions = [
        {title: "My Info", subTitle: "Setup your profile", onPress: () => {}},
        {title: "Accounts", subTitle: null, onPress: () => {}},
        {title: "Default account for new contacts", subTitle: "email", onPress: () => {}},
        {title: "Contacts to display", subTitle: "All contacts", onPress: () => {}},
        {title: "Name format", subTitle: "First name", onPress: () => {}},
        {title: "Import", subTitle: null, onPress: () => {}},
        {title: "Export", subTitle: null, onPress: () => {}},
        {title: "Blocker numbers", subTitle: null, onPress: () => {}},
        {title: "About RNContacts", subTitle: null, onPress: () => {}},
    ];


    return(
        <SettingsComponent settingsOptions = {settingsOptions} />
    );
};

export default Settings;