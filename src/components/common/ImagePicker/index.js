import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from '../../common/Icon';
import styles from './styles';

const ImagePicker = React.forwardRef(({}, ref) => {
    //options to either pick from camera or gallery
    const options = [
        {
            name: "Take from camera",
            icon: <Icon name = "camera" color={colors.grey} size = {21}/>, 
            onPress: ()=>{},
        },
        {
            name: "Choose from Gallery", 
            icon: <Icon name = "image" color={colors.grey} size = {21}/>, 
            onPress: ()=>{},
        },
    ];
    return(
        /* the FORMAT for RBSheet can be found in the react-native-raw-bottom-sheet documentation
        https://www.npmjs.com/package/react-native-raw-bottom-sheet */


        <RBSheet
            ref={ref}
            height={190}
            openDuration={250}
            closeOnDragDown
            customStyles={{
                container: {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                },
            }}>

            <View style = {styles.optionsWrapper}>
                {options.map(({name, onPress, icon})=>(
                    <TouchableOpacity style ={styles.pickerOption} key = {name}>
                        {icon}
                        <Text style = {styles.text}> {name} </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </RBSheet>
    );
});


export default ImagePicker;