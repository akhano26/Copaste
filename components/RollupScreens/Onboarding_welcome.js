import { StatusBar, StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Image } from 'react-native'
import React from 'react'
import { responsiveAverage, responsiveHeight, responsiveWidth,dp } from '../../assets/utility'
import logo from '../../assets/logo1.png'
const Onboarding_welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <View style={styles.logo_button_container}>
        <View style={styles.button_container}>
            <TouchableOpacity style={styles.skip_button}>
                <Text style={styles.button}>SKIP</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.logo_con}>

          <Image style={styles.logo} source={logo}/>
        </View>
        <View style={styles.txt_con}>
<Text style={styles.wel_txt}>Welcome co Copaste</Text>
<Text style={styles.sim_txt}>Youthful, dynamic, energetic, light service for shops and bloggers.</Text>
        </View>

        <View style={styles.button_container_2}>
           <TouchableOpacity onPress={()=>{navigation.navigate('Login_Screen')}} style={styles.login_button}><Text style={{color:'#FFFFFF',fontFamily:'Poppins-SemiBold',fontSize:dp(16)}}>LOG IN</Text></TouchableOpacity>
           <TouchableOpacity  onPress={()=>{navigation.navigate('Sign_up_roll')}}  style={styles.sign_button}><Text style={{color:'#0E0E17',fontFamily:'Poppins-SemiBold',fontSize:dp(16)}}>SIGN UP</Text></TouchableOpacity>
        </View>
    </View>
</SafeAreaView>
  )
}

export default Onboarding_welcome

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'white'
},
button: {
  fontSize: dp(14),
  color: '#6061F6',
},
button_container:{
  alignItems:'flex-end',
  
},
skip_button:{
  paddingHorizontal:responsiveAverage(1.3),
  borderRadius:2,
  borderWidth:1,
  borderColor:'#6061F6',
  justifyContent:'center',
  textAlign:'center',
  width:responsiveWidth(18),
  height:responsiveHeight(6),
  marginRight:responsiveAverage(4),
  marginTop:responsiveAverage(4)
},
logo_con:{
  //flexDirection:'row',
  // /flex:1,
  marginTop:'44%',
  paddingLeft:responsiveAverage(2),
    
},
logo:{
  
},
txt_con:{
  paddingHorizontal:responsiveAverage(2),
  marginTop:responsiveAverage(4)
},
wel_txt:{
  fontFamily:'Poppins-Bold',
  color:'#0E0E17',
  fontSize:dp(24)
},
sim_txt:{
  fontFamily:'Poppins-Regular',
  color:'#0E0E17',
  fontSize:dp(17)
},
button_container_2:{
  marginTop:responsiveAverage(12),
marginHorizontal:responsiveAverage(2),
rowGap:responsiveAverage(1)
},
login_button:{
  paddingVertical:responsiveAverage(1.3),
  backgroundColor:'#6061F6',
  alignItems:'center',
  borderRadius:5,
  height:responsiveHeight(7)
},
sign_button:{
  paddingVertical:responsiveAverage(1.3),
  alignItems:'center',
  backgroundColor:'#F3F3FC',
  borderRadius:5,
  height:responsiveHeight(7)
}

})