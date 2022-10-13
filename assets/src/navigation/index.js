import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import homepage from '../screens/homepage/homepage';
import Symptoms from '../screens/Symptoms/Symptoms';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign in" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={homepage} />
        <Stack.Screen name="Symptoms" component={Symptoms} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;