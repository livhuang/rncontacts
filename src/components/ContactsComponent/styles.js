import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({

    itemContainer: {    
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingRight: 20,
        alignItems: "center",
    },

    item:{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: "center",
        paddingHorizontal: 20,
    },


    name: {
        fontSize: 17,
    },


    phoneNumber:{
        opacity: 0.6,
        fontSize: 14,
        paddingVertical: 5,
    },
    


    floatingActionButton: {
        backgroundColor: 'red',
        width: 55,
        height: 55,
        position: "absolute",       //fixed position
        bottom: 45,                 //brings to the bottom
        right: 10,                   //brings to the right
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    





    },

});