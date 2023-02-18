import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButtonComponent = ({text, onClick, design}) => {
  return (
    <Pressable style={[styles.container, design && {...design}]} onPress={onClick}>
      <Text style={styles.text}>{text? text : 'Button'}</Text>
    </Pressable>
  )
}

export default CustomButtonComponent

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#E50914',
        padding: 15,
        borderRadius: 5
    },
    text: {
        textAlign: 'center',
        color: 'white'
    }
})