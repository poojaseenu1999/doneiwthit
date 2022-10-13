import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const homepage = () => {
  const navigation = useNavigation();

  const Symptoms = () => {
    console.warn("diagnosis");
     navigation.navigate("Symptoms");
  }


  return (
    <View style={styles.root}>
      <Text>USER DETAILS</Text>
      <Text>POOJA SRINIVASAN</Text>
      <Text>DOB: 19-SEP-1999</Text>
      <CustomButton text="BEGIN DIAGNOSIS" onPress={Symptoms} />
    </View>
  )
}


const styles = StyleSheet.create({
  root:{
      alignItems: 'center',
      padding: 30,
     

  }
})

export default homepage
