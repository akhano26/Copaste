import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import otppic from '../../assets/otppic.png'
import { responsiveHeight, responsiveWidth,dp,responsiveAverage } from '../../assets/utility'
import { TextInput }  from 'react-native-paper';

const OtpVerificationV1 = () => {
  return (
    <View style={styles.container}>
     <View style={styles.pic_con}>
      <Image source={otppic} style={styles.otppic}/>
     </View>
     <View style={styles.otp_veri_con}>
      <Text style={styles.otp_veri_heading}>OTP Verification</Text>
      <Text style={styles.otp_veri_code}>Enter the OTP sent to +00-1234-567-8912</Text>
     </View>
     
   < View style={styles.pin_input_con}>
   <TextInput style={styles.pin_input}/>
  <TextInput style={styles.pin_input}/>
   <TextInput style={styles.pin_input}/>
   <TextInput style={styles.pin_input}/>
   </View>
<TouchableOpacity activeOpacity={0.7} style={styles.button}><Text style={styles.signup_txt}>Send</Text></TouchableOpacity>

<View style={styles.resgis_con}><Text style={styles.regis_txt}>Are you registered? To <Text style={styles.login_txt}>Log In</Text></Text></View>
    

    </View>
  )
}

export default OtpVerificationV1

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'white'
  },
  pic_con:{
  alignItems:'center',
  justifyContent:'flex-end'
  },

  otppic:{
    height:responsiveHeight(30),
    width:responsiveWidth(50),
    marginTop:responsiveAverage(4)
  },

  input:{
    
    alignSelf:'center',
    width: responsiveWidth(90),
  borderRadius:5,
  marginTop:responsiveAverage(4)
  },
  button:{
    backgroundColor:'#6061F6',
    width:'90%',
    height:responsiveHeight(7.5),
    alignSelf:'center',
    alignItems:'center',
    paddingVertical:'5%',
    borderRadius:responsiveAverage(.5),
    marginTop:responsiveAverage(4)
  },
  signup_txt:{
    // fontWeight:'600',
    fontSize:dp(16),
    fontFamily:'Poppins-SemiBold'
  },
  otp_veri_con:{
    rowGap:responsiveAverage(1),
    marginHorizontal:responsiveAverage(2)
  },
  otp_veri_heading:{
color:'#0E0E17',
//fontWeight:'700',
fontSize:dp(24),
fontFamily:'Poppins-Bold'
  },

  otp_veri_code:{
color:'#0E0E17',
fontSize:dp(14),
fontFamily:'Poppins-Medium'
  },
  
  resgis_con:{
    marginTop:responsiveAverage(4),
    alignItems:'center'
  },
  regis_txt:{
    color:'#AAAAC1',
    fontSize:dp(14),
    fontFamily:'Poppins-Regular'
  },
  login_txt:{
  color:'#6061F6',
  fontFamily:'Poppins-Regular'
  },
  
pin_input_con:{
  marginTop:responsiveAverage(2),
  flexDirection:'row',
  columnGap:responsiveAverage(1),
  alignSelf:'center'
},
pin_input:{
  borderWidth:1,
  width:responsiveWidth(19.5),
  height:responsiveHeight(8),
  borderColor:'black',
  backgroundColor:'white'
}

})