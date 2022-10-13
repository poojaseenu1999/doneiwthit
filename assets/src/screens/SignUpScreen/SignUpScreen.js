import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../images/health.png'; 
import Customerinput from '../../components/Customerinput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn("Sign in");
    navigation.navigate("Sign in");
  }
  const onForgetPasswordPressed = () => {
    console.warn("forget password");
  }
  const onSignInFacebook = () => {
    console.warn("Sign in with facebook");
  }
  const onSignInGoogle = () => {
    console.warn("Sign in with google");
  }
  const onSignUpPressed = () => {
    console.warn("register");
  }
  const onSignInApple = () => {
    console.warn("Sign in");
  }



  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an Account</Text>
      <Customerinput placeholder="First Name" value={username} setValue={setUsername} />
      <Customerinput placeholder="Last Name" value={username} setValue={setUsername} />
      <Customerinput placeholder="Date of Birth" value={username} setValue={setUsername} />
      <Customerinput placeholder="Password" value={password} setValue={setPassword}  secureTextEntry/>

      <CustomButton text="Sign In" onPress={onSignInPressed} />
      {/* <CustomButton text="Forget password" onPress={onForgetPasswordPressed} bgColor="#D0D0D0" />
       <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
       <CustomButton text="Sign In with google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4044" />
       {/* <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#e3e3e3" fgColor="#363636" /> */}
       {/* <CustomButton text="Don't have an account? create one" onPress={onSignUpPressed} bgColor="#ff6666"/> */} 


    </View>
  )
}
   
const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: 100,
        maxWidth: 300, 
        maxHeight: 200,
    },
    title: {
      fontSize: 24,
      fontWeight: 300,
      color: "#051C60",
      margin: 10,
    }
})
export default SignUpScreen;