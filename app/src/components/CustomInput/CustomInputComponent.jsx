import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInputComponent = ({value, setValue, placeholder, secureTextEntry, autoFocus=false}) => {

  return (
    <View style={styles.container}>
      <TextInput 
            onChangeText={setValue}
            value={value} 
            placeholder={placeholder} 
            style={styles.input} 
            secureTextEntry= {secureTextEntry ? true : false}
            placeholderTextColor={'#e8e8e8'}
            autoFocus={autoFocus}
        />
    </View>
  )
}

export default CustomInputComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#424242',
        width: '100%',
        borderBottomColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    input: {
        color: 'white',
        
    }
})