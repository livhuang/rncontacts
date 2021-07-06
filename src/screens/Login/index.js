import React from 'react';
import { Text, View, TextInput} from 'react-native';
import { onChange } from 'react-native-reanimated';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';



const Login = () => {
    const [value, onChangeText] = React.useState('');
    return(
        <Container>
            {/* <Text> Hi from Login</Text> */}

            <Input
                label = "Username"
                onChangeText = {(text) => onChange(text)}
                value = {value}
                iconPosition="right"
                // error={"This field is required"}
            />

            <Input
                label = "Password"
                onChangeText = {(text) => onChange(text)}
                value = {value}
                icon={<Text>HIDE</Text>}
                iconPosition="right"

            />

            <CustomButton secondary title ="Submit" loading={true} disabled={true} />
            <CustomButton secondary loading title ="Click Me" />
            <CustomButton primary title ="Submit"loading={true} disabled={true} />
            <CustomButton danger title ="Submit" />
        </Container>
    );
};


export default Login;