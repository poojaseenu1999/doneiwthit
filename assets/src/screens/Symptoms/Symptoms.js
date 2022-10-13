import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const symptoms = () => {
  return (
    <View style={styles.root}>
      <Text>SYMPTOMS FORM</Text>
      <label style={styles.textfield}>1. Please provide a small description on what illness you're suffering from? </label>
      <textarea placeholder='write here'  style={styles.textarea}></textarea>
      <label style={styles.textfield}>Or kindly upload your symptoms (accepted format- .pdf,.word)</label>
    </View>
  )
}
const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: "5%",

    },
    textarea: {
        width: '100%',
        paddingBottom: "20%",
        marginTop: "5%",
    },
    textfield: {
        marginTop: "10%",
    }
})

export default symptoms