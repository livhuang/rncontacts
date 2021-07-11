import React, {useContext, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native";

const AppNavContainer = () => {
  
  const{
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [authLoaded, setAuthLoaded] = React.useState(false);

  const getUser = async () => {
    try{

      const user = await AsyncStorage.getItem("user");

      if(user){
        setAuthLoaded(true);
        setIsAuthenticated(true);
      }else{
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }

    }catch(error){

    }
  };

  useEffect(() => {
    getUser();
  }, []);



  //we can read from the GlobalContext from anywhere by doing useContext && Read any state

  console.log('isAuthenticated? :>> ', isAuthenticated);
    return (
      <>

      {authLoaded ? (
        <NavigationContainer>
          {/* /* when user is Logged in, return DrawerNavigator,
          when user is not Logged in, return AuthNavigator */ }
          {isLoggedIn || isAuthenticated ? <DrawerNavigator/> : <AuthNavigator/> }
        </NavigationContainer>

    ) : ( 
      <ActivityIndicator/>
    )}
      </>
    );
};


export default AppNavContainer;

