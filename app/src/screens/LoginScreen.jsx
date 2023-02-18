import { StyleSheet, Text, View, Image, Pressable, StatusBar, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png';
import MovieBgs from '../../assets/images/movie-bgs.jpg';
import CustomInputComponent from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginPressed = ()=>{

    console.warn('Login pressed');
    
  }
  
  const signUpPressed = ()=>{
    
    navigation.navigate('Signup')
  }

  return (
    <ImageBackground source={MovieBgs} resizeMode='cover' style={styles.movieBgs} >
    
    <View style={styles.root}>

       <StatusBar
        backgroundColor="black"
      />
      <Image source={Logo} resizeMode='contain' style={styles.logo} />
      <Text style={styles.title}>Welcome back</Text>
      <CustomInputComponent placeholder={'Email'} value={email} setValue={setEmail} />
      <CustomInputComponent  placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry={true} />
      <Pressable style={styles.forgotWrapper}>
        <Text styles={styles.signUpNow}>Forgot password?</Text>
      </Pressable>
      <CustomButton onClick={loginPressed} design={styles.loginBtn} text={'Login'} />
      <View style={styles.signUp}>
      <Text style={styles.question}>New to Netflix?</Text>
      <Pressable onPress={signUpPressed}>
        <Text style={styles.signUpNow}>Sign up now.</Text>
      </Pressable>
      </View>
    </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 87.26%, #000000 100%)',
    paddingTop: 60
  },
  logo: {
    marginBottom: 30,
    width: "100%",
    height: 100,
    maxWidth: 300
  },
  title:{
    color:'white',
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  signUp:{
    width: '100%',
    marginTop: 15,
    flexDirection: 'row'
  },
  question:{
    color: 'gray',
    marginRight: 5
  },
  signUpNow:{
    color:'white'
  },  
  loginBtn:{
    marginTop: 30
  },
  movieBgs:{
    flex: 1
  },
  forgotWrapper:{
    width: '100%',
    justifyContent: 'flex-end',
  },
  forgot:{
    width: '100%',
    color: 'white'
  }
})

export default LoginScreen