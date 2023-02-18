import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NamedLogo from '../../assets/images/named_logo.png'
import smile from "../../assets/images/smile.png";
import pluse from "../../assets/images/pluse.png";
import { randomNumber } from '../../assets/constants/methods';

const UsernsScreen = ({navigation}) => {
  
  const  userScreenCards= [
    {
    uuid: '573cda0e-355b-406a-9489-0f0c93de7003',
    name: 'Henil Mehta',
    },
    {
    uuid: '573cda0e-355b-406a-9489-0f0c93de7012',
    name: 'Jay',
    },
    {
    uuid: '553cda0e-355b-406a-9489-0f0c93de7012',
    name: 'Akash ',
    },
    {
      uuid: '553cda0e-355b-406a-9489-0f0c93de7012',
    name: 'Add one',
    pluse: true
    }
]

  
  return (
    <View style={styles.root}>
        <View style={styles.headerWrapper}>
        <Image source={NamedLogo} resizeMode='contain' style={styles.logo} />
        </View>
        <View style={styles.cardWrapper}>
          <FlatList data={userScreenCards} numColumns={2} contentContainerStyle={styles.cardMainWrapper} renderItem={renderItem} />
        </View>
    </View>
  )
}

const renderItem = ({item})=>{
  

  const handleNavigation = (pluse = false)=>{

    if(pluse){
      console.log('Add one');
    }else{
      console.log('Person');
    }

  }

  return (
    <Pressable onPress={()=>{
      handleNavigation(item?.pluse);
    }}  key={item.uuid} style={[styles.cardInnerWrapper, ]}>
      <View style={[styles.cardImageWraper, {backgroundColor: `${item.pluse ? 'transparent':randomNumber()}`}]}>
        <Image source={`${item.pluse ? pluse : smile}`} resizeMode='contain' styles={[styles.pluse]} />
      </View>
    <Text style={{color: 'white', textAlign:'center'}}>{item.name}</Text>
    </Pressable>
  )
}

export default UsernsScreen

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 20
    },
    headerWrapper: {
        position:'relative'
    },
    logo:{
        width: 138,
        height: 37.2,
    },
    cardWrapper:{
      flex: 1,
      flexDirection: 'row',
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardInnerWrapper:{
      width:'50%',
      position: 'relative',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15
    },
    cardMainWrapper:{
      gap: 15
    },  
    cardImageWraper: {
      width: '100%',
      alignItems: 'center',
      padding: 40,
      borderRadius: 5,
      marginBottom:8,
      borderWidth: 1,
      borderColor: 'grey'
    }
})