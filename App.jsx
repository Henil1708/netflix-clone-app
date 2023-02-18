import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SignUpScreen, LoginScreen, HomeScreen, UsernsScreen, AddUser} from './app/src/screens';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const App = () =>{
  const [auth, setAuth] = useState(true);
  return (
    <View style={styles.root}>
      <StatusBar 
      backgroundColor={'#000'}
      />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          
          {
            !auth ? <>
              <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
            </> :  <>
          <Stack.Screen name="AddUser" component={AddUser} />
          <Stack.Screen name="Users" component={UsernsScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
            </>
          }

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  ) 
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#000'
  }
})

export default App;