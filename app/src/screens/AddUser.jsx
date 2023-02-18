import React, { Component, useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import smile from "../../assets/images/smile.png";
import { randomNumber } from '../../assets/constants/methods';
import CustomButtonComponent from '../components/CustomButton/CustomButtonComponent';
import CustomInputComponent from '../components/CustomInput/CustomInputComponent';

const AddUser = ({navigation}) => {

    const [user, setUser] = useState("");
    const [profileBackground, setProfileBackground] = useState("000");
    useEffect(() => {
        setProfileBackground(randomNumber());
    }, [])

    const handleAddUser = () =>{

        console.log("Add user");
        navigation.navigate('Home');

    }

    const handleGoBack = () => {
        console.log("Hello");
        navigation.navigate('Users');
    }

    return (
      <View style={styles.root}>
        <Pressable style={styles.backWrapper} onPress={handleGoBack}>
            <Text style={styles.backTitle}>Go back</Text>
        </Pressable>
        <Text style={styles.title}> Add user </Text>
        <View style={[styles.imageWrapper, {backgroundColor: profileBackground}]}>
            <Image source={smile} resizeMode='contain' />
        </View>
        <CustomInputComponent setValue={setUser} value={user} autoFocus= {true} /> 
        <CustomButtonComponent text={'Add user'} onClick={handleAddUser} />
      </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        padding: 30,
        position: 'relative'
    },
    title:{
        color:"white",
        textAlign: 'center',
        fontSize: 23,
        marginBottom: 30
    },
    imageWrapper:{
        width: 150,
        height: 150,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    backWrapper:{
        position: 'absolute',
        top: 10,
        left: 30
    },
    backTitle:{
        color: 'red',
        backgroundColor: '#141414',
        padding: 10,
        borderRadius: 50
    }
})

export default AddUser
