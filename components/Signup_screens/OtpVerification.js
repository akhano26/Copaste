import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import otppic from '../../assets/otppic.png'
import { responsiveHeight, responsiveWidth,dp,responsiveAverage } from '../../assets/utility'
import { TextInput }  from 'react-native-paper';

const OtpVerification = () => {
  return (
    <View style={styles.container}>
     <View style={styles.pic_con}>
      <Image source={otppic} style={styles.otppic}/>
     </View>
     <View style={styles.otp_veri_con}>
      <Text style={styles.otp_veri_heading}>OTP Verification</Text>
      <Text style={styles.otp_veri_code}>We will send you a One Time Password on this mobile number</Text>
     </View>
     
     <View style={styles.input}><TextInput
placeholderTextColor={'#AAAAC1'}
autoCapitalize='none'
keyboardType='email-address'
textContentType='emailaddress'
autoFocus={true}
autoCorrect={false}
secureTextEntry={true}
mode="outlined"
label="Mobile number"

right={<TextInput.Affix  />}


/></View>
<TouchableOpacity activeOpacity={0.7} style={styles.button}><Text style={styles.signup_txt}>Sign Up</Text></TouchableOpacity>

<View style={styles.resgis_con}><Text style={styles.regis_txt}>Are yor registered? To <Text style={styles.login_txt}>Log In</Text></Text></View>
    

    </View>
  )
}

export default OtpVerification

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
    fontWeight:'600',
    fontSize:dp(16)
  },
  otp_veri_con:{
    rowGap:responsiveAverage(1),
    marginHorizontal:responsiveAverage(2)
  },
  otp_veri_heading:{
color:'#0E0E17',
fontWeight:'700',
fontSize:dp(24)
  },
  otp_veri_code:{
color:'#0E0E17',
fontSize:dp(14)
  },
  resgis_con:{
    marginTop:responsiveAverage(4),
    alignItems:'center'
  },
  regis_txt:{
    color:'#AAAAC1',
    fontSize:dp(14)
  },
  login_txt:{
  color:'#6061F6'
  },


})