import React from 'react';
import styles from './styles';
import Container from '../../components/common/Container';
import { SETTINGS } from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import { 
    Text,
    View, 
    SafeAreaView,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import Icon from "../../components/common/Icon";


const SideMenu = ({navigation, authDispatch}) => {

    const handleLogout = () =>{
        navigation.toggleDrawer();
        Alert.alert("Logout!","Are you sure you want to logout?", [
            {
                text:"Cancel",
                onPress: () => {},
            },
            {
                text:"OK",
                onPress: () => {
                    logoutUser()(authDispatch);
                },
            },
        ]);
    };

    const menuItems=[
        {
            /*
            LINK TO ICONS API USED && ICON DIRECTORY:
            https://oblador.github.io/react-native-vector-icons/
             */
            icon:<Icon type ="fontisto" size = {17} name = 'player-settings'></Icon>, 
            name:"Settings", 
            onPress: () => {
                navigation.navigate(SETTINGS);
            },
        },
        {
            icon:<Icon type = "material" size = {17} name = 'logout'></Icon>, 
            name:"Logout",
            onPress: handleLogout,
        },
    ];



    return (
        <SafeAreaView>
            <Container>
                <Image 
                    height ={70} 
                    width={70} 
                    source ={require('../../assets/images/logo.png')} 
                    style ={styles.logoImage}
                />
                {/* The Style is paddingHorizonal: 70 in attempt to make it look centered,
                because alignItems: 'center' doesn't center both the icon & text */}
                <View style = {{paddingHorizontal: 70}}> 
                    {menuItems.map(({name, icon, onPress}) => (
                        <TouchableOpacity onPress={onPress} key ={name} style={styles.item} >
                            {icon}

                            <Text style={styles.itemText} >{name}</Text>

                        </TouchableOpacity>
                    ))}
                </View>
            </Container>
        </SafeAreaView>
    );
};

export default SideMenu;