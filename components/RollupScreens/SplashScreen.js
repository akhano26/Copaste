import { StyleSheet, Text, View,Image, StatusBar } from 'react-native'
import React from 'react'
import logo from '../../assets/logoinitail.png'
import { dp } from '../../assets/utility'


const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#6061F6'}/>
     <Image source={logo} style={styles.pic}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
 container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#6061F6'
 },
 pic:{
  height:dp(144),
  width:dp(188)
 }

})