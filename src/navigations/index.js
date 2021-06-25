import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/reducers/Provider';

const AppNavContainer = () => {
  


  const {
    authState:{isLoggedIn},
  } = useContext(GlobalContext);
  //we can read from the GlobalContext from anywhere by doing useContext && Read any state

  console.log('isLoggedIn :>> ', isLoggedIn);
    return (
        <NavigationContainer>
          {/* /* when user is Logged in, return DrawerNavigator,
          when user is not Logged in, return AuthNavigator */ }
          {isLoggedIn? <DrawerNavigator/>:<AuthNavigator/> }
          
        </NavigationContainer>
    );
};


export default AppNavContainer;

