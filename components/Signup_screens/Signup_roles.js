import React,{useState} from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Pressable, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo1.png'
import { dp, responsiveHeight, responsiveWidth } from '../../assets/utility';
import girlenmy from '../../assets/girl.png'
import boyenmy from '../../assets/maleEnemy.png'
import bluegirl from '../../assets/bluegirl.png'
import blueboy from '../../assets/blueboy.png'


function SignupRoles({navigation}) {


  const [disable,setdisable]=useState(true)
  const [isGirlenemy,setGirlenemy]=useState(false)
  const [isBoyenemy,setBoyenemy]=useState(false)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={styles.sec_container}>
        <View style={styles.piccontainer}>
        <Image style={styles.logo_pic} source={logo}/>


</View>
        <View style={styles.text_container}>
          <Text style={styles.welcome}>Welcome to Copaste</Text>
          <Text style={styles.secfont}>Youthful, dynamic, energetic, light service for shops and bloggers</Text>
        </View>
        <View style={styles.boxContiner}>
          <TouchableOpacity onPress={()=>{setGirlenemy(true)
          setBoyenemy(false)}}  style={[styles.box,{backgroundColor:isGirlenemy?'#F3F3FC':'white',borderColor:isGirlenemy?'#6061F6':'black'}]}><Image style={styles.pic} source={isGirlenemy?bluegirl:girlenmy}/>
          <Text style={{color:isGirlenemy?'#6061F6':'#0E0E17',}}>I'm a Copaster</Text></TouchableOpacity>
          <TouchableOpacity  onPress={()=>{setGirlenemy(false)
          setBoyenemy(true)}}  style={[styles.box,{backgroundColor:isBoyenemy?'#F3F3FC':'white',borderColor:isBoyenemy?'#6061F6':'black'}]}><Image style={styles.pic} source={isBoyenemy?blueboy:boyenmy}/>
          <Text style={{color:isBoyenemy?'#6061F6':'#0E0E17'}}>I'm a Advertiser</Text></TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Sign_up_Screen')}} disabled={!isBoyenemy&&!isGirlenemy} style={styles.button}>
          <Text style={{color:'#6061F6'}}>Next</Text>
        </TouchableOpacity></View>
        <View style={{flexDirection:'row',justifyContent:'center', flex: 0.5 }}>
  <Text style={{ color: '#AAAAC1' }}>I am a registered user. </Text>
  <TouchableOpacity onPress={()=>{navigation.navigate('Login_Screen')}}>
    <Text style={{ color: 'blue' }}>Log In</Text>
  </TouchableOpacity>
</View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },

  sec_container: {
    flex: 1
  },

  text_container: {
    flex:1,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    width:responsiveWidth(90)
  },
  piccontainer:{
flex:1,
alignItems:'center',
justifyContent:'flex-end'
  },

  logo_pic:{
width:responsiveWidth(55),
height:responsiveHeight(5)
  },
  welcome: {
    color: '#0E0E17',
    
    fontFamily:'Poppins-Bold',
    fontSize: dp(28),
    
    textAlign: 'center'
  },
pic:{
height:responsiveHeight(15),
width:responsiveWidth(18),

},
  secfont: {
    color: '#0E0E17',
    fontWeight: '400',
    fontSize: dp(16),
    fontFamily:'Poppins-Regular',
    textAlign: 'center',
    lineHeight: responsiveHeight(4)
  },

  boxContiner: {
  flex:1,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  box: {
    marginHorizontal: responsiveWidth(3),
    borderRadius: 8,
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    borderWidth: 1,
    rowGap:responsiveHeight(1),
    borderColor: 'black',
    backgroundColor: 'white',
    alignItems:'center'
  },

  animi_contianer: {
    
    backgroundColor: '#fff' 
  },

  button:{
   
    alignSelf:'center',
    alignItems:'center',
    borderColor:'#6061F6',
    borderWidth:1,
    marginTop:responsiveHeight(5),
    width: responsiveWidth(86),
    height: responsiveHeight(8),
    borderRadius: responsiveWidth(2),
    paddingTop:responsiveWidth(5)    
  }
});

export default SignupRoles;
