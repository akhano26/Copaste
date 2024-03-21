import React, {useState} from 'react'
import {View,Text,StyleSheet,StatusBar,ScrollView,Pressable, TouchableOpacity} from 'react-native'
import { dp, responsiveAverage, responsiveHeight, responsiveWidth } from '../../assets/utility';
import { TextInput }  from 'react-native-paper';
// import EvilIcons from 'react-native-vector-icons/EvilIcons'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import AntDesign from 'react-native-vector-icons/AntDesign'


function SignIn1({navigation}) {
  
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [closeEye, setCloseEye] = useState(false);

  const togglePasswordVisibility = () => {
    setCloseEye(!closeEye);
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    // This function will only be called when all fields are filled
  };

  const isSignUpDisabled = !email || !password;

  return (
    <View style={{flex:1}}>
   <ScrollView style={styles.container } contentContainerStyle={{flexGrow:1}}>
  <StatusBar translucent={false} backgroundColor={'white'} barStyle="dark-content" />
  <View style={styles.text_container}>
    <Text style={styles.heading}>Sign In</Text>
    <Text style={styles.welcome}>Hello! Welcome Back</Text>
     </View>
     <View style={styles.all_inputs}>
        
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Password"
          secureTextEntry={!closeEye}
          value={password}
          onChangeText={setPassword}
          right={<TextInput.Icon icon={closeEye ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility} />}
        />
      </View>
      <View style={styles.forget_pass_con}>
        <TouchableOpacity onPress={()=>navigation.navigate('Recover_Pass1')}><Text style={styles.forget_pass_txt}>Forgot password</Text></TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button]}
        disabled={isSignUpDisabled}
        onPress={handleSignUp}
      >
        <Text style={[styles.signup_txt, { color: isSignUpDisabled ? '#A5A4FA' : 'white' }]}>Sign In</Text>
      </TouchableOpacity>
   
     <View style={styles.or_signup_con}>
 <Text style={styles.sign_up_txt}>--------------    OR LOG IN With    --------------</Text>
     </View>
     <View style={styles.logo_container_main}>
<View style={styles.logo_container}>

  {/* {/* <EvilIcons name='sc-facebook' size='' color='#0F8FF2'/> */}
  {/* <Ionicons name='logo-google' size='' color='#EB4335'/>
  <AntDesign name='apple1' size='' color='#000000'/>  */}

</View>
<View style={styles.resgis_con}><Text style={styles.regis_txt}>Don't have an account? </Text>

<TouchableOpacity onPress={()=>{navigation.navigate('Sign_up_roll')}}><Text style={styles.login_txt}>Sing Up</Text></TouchableOpacity></View>
     </View>
   </ScrollView>
   </View>
  )
}
const styles=StyleSheet.create({
container:{
  flexGrow:1,
  backgroundColor:'white'
},
text_container:{
  rowGap:10,
  paddingHorizontal:'5%',
  marginVertical:20
},
heading:{
  color:'black',
  fontFamily:'Poppins-Bold',
  fontWeight:'700',
  fontSize:dp(28),
  lineHeight:42
},
welcome:{
  color:'black',
  fontFamily:'Poppins-Regular',
  fontSize:dp(16),
  fontWeight:'400',
  lineHeight:24
},
all_inputs:{
  marginVertical:20,
  rowGap:responsiveAverage(1)
},
input:{
  alignSelf:'center',
 
  width: responsiveWidth(90),

borderRadius:5
},
button:{
  backgroundColor:'#6061F6',
  width:'90%',
  height:responsiveHeight(7.5),
  alignSelf:'center',
  alignItems:'center',
  paddingVertical:'5%',
  borderRadius:responsiveAverage(.5),
  marginTop:'12%'
},
term_text_con:{
  width:'90%',
 marginVertical:'5%',
  alignItems:'center', 
  textAlign:'center',
  alignSelf:'center'
},
term_txt:{
  color:'#AAAAC1',
  fontFamily:'Poppins-Regular',
  fontSize:dp(14)
},
term_of_use:{
color:'#6061F6',
fontFamily:'Poppins-Regular',
fontSize:dp(14)
},

or_signup_con:{
  alignSelf:'center',
  paddingTop:'14%'

},

sign_up_txt:{
  color:'#AAAAC1',
  fontFamily:'Poppins-Regular',
  fontSize:13
},
resgis_con:{
 flexDirection:'row',
 paddingHorizontal:'20%',
  alignItems:'center'
},
regis_txt:{
  fontFamily:'Poppins-Regular',
  color:'#AAAAC1',
  fontSize:dp(14)
},
login_txt:{
color:'#6061F6'
},
signup_txt:{
  fontWeight:'600',
  fontSize:dp(16)
},
forget_pass_con:{
  alignItems:'flex-end',
  paddingHorizontal:'5.5%'
},
forget_pass_txt:{
  color:'#AAAAC1'
}

})

export default SignIn1