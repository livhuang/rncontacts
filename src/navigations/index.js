import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  const isLoggedIn = true;
    return (
        <NavigationContainer>
          {/* when user is Logged in, return DrawerNavigator,
          when user is not Logged in, return AuthNavigator */}
          {isLoggedIn? <DrawerNavigator/>:<AuthNavigator/> }
          
        </NavigationContainer>
    );
};


export default AppNavContainer;

