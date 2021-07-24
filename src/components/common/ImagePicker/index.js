import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from '../../common/Icon';
import styles from './styles';
/*renamed the default export 'ImagePicker' (react-native-image-crop-picker) 
to 'ImagePickerCropper, in order to avoid collision with the Component name */
import ImagePickerCropper from 'react-native-image-crop-picker';       

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
    //options to either pick from camera or gallery
    const options = [
        {
            name: "Take from camera",
            icon: <Icon name = "camera" color={colors.grey} size = {21}/>, 
            onPress: ()=>{
                ImagePickerCropper.openCamera({
                    width: 300,
                    height: 300,
                    cropping: true,
                    freeStyleCropEnabled: true,
                })
                    .then((images)=>{
                        onFileSelected(images);
                }).catch((error)=>{
                    console.log('error', error);
                });
            },
        },
        {
            name: "Choose from Gallery", 
            icon: <Icon name = "image" color={colors.grey} size = {21}/>, 
            onPress: ()=>{
                ImagePickerCropper.openPicker({
                    width: 300,
                    height: 300,
                    cropping: true,
                    freeStyleCropEnabled: true,
                })
                    .then((images)=>{
                        onFileSelected(images);

                }).catch((error)=>{
                    console.log('error', error);
                });

            },
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
                    <TouchableOpacity 
                        onPress={onPress} 
                        style ={styles.pickerOption} 
                        key = {name}>
                        {icon}
                        <Text style = {styles.text}> {name} </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </RBSheet>
    );
});


export default ImagePicker;