import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';
import Message from '../common/Message';

const ContactsComponent = ({modalVisible, setModalVisible, data, loading}) => {


    const ListEmptyComponent = () => {
        return ( 
        <View style = {{paddingVertical: 100, paddingHorizontal: 100}}>

            <Message info message = 'No contacts to show'></Message>
        </View>
        );
    };

    const renderItem = ({item}) => {
        console.log('item', item);
        const{contact_picture} = item;

        return(
            <TouchableOpacity>
                <View>
                    {contact_picture?(
                        <Image source = {{uri:contact_picture}}/>
                    ):( 
                        <View 
                            style = {{
                                width: 45, 
                                height:45, 
                                backgroundColor: colors.grey,
                        }}></View>
                    )}
                </View>
            </TouchableOpacity>
        );
    };
    return(
        <View>
            <AppModal 
              modalFooter = {<></>}
              modalBody = {<View>
                  <Text>Hello from the modal</Text>
              </View>}
              title = "My Profile!"
              setModalVisible={setModalVisible} 
              modalVisible={modalVisible} 
            />


            {loading && (
                <View style = {{paddingVertical: 100, paddingHorizontal: 100}}>
                    <ActivityIndicator color ={colors.primary}  size = 'large'/>
                </View>
            )}

            {!loading && ( 
                <FlatList 
                    renderItem = {renderItem} 
                    data = {data} 
                    keyExtractor = {(item) => String(item.id)}
                    ListEmptyComponent ={ListEmptyComponent}
                />
            )}
        

        </View>
    );
};



export default ContactsComponent;