import React, {useState} from 'react'
import {View,Text,StyleSheet,StatusBar,ScrollView,Pressable, TouchableOpacity,SafeAreaView} from 'react-native'
import { dp, responsiveAverage, responsiveHeight, responsiveWidth } from '../../assets/utility';
import { TextInput }  from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import AntDesign from 'react-native-vector-icons/AntDesign'


function SignupScreen({navigation}) {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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

  const isSignUpDisabled = !firstName || !lastName || !email || !password;

 


  return (
    <SafeAreaView style={{flex:1}}>
   <ScrollView style={styles.container } contentContainerStyle={{flexGrow:1}}>
  <StatusBar translucent={false} backgroundColor={'white'} barStyle="dark-content" />
  <View style={styles.text_container}>
    <Text style={styles.heading}>Sign Up</Text>
    <Text style={styles.welcome}>Hello! Welcome</Text>
     </View>
     <View style={styles.all_inputs}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
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
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button, ]}
        disabled={isSignUpDisabled}
        onPress={handleSignUp}
      >
        <Text style={[styles.signup_txt,{ color: isSignUpDisabled ? '#A5A4FA' : 'white' }]}>Sign Up</Text>
      </TouchableOpacity>
     <View style={styles.term_text_con}>
      <Text style={styles.term_txt}>By registering, yor accept the terms of the </Text><Text style={styles.term_of_use}>Term of use</Text>
     </View>
     <View style={styles.or_signup_con}>
 <Text style={styles.sign_up_txt}>---------------------   OR SIGN UP With    -------------------</Text>
     </View>
     <View style={styles.logo_container_main}>
<View style={styles.logo_container}>

{/* <Ionicons name='logo-google' size='' color='#EB4335'/> */}
  {/* <EvilIcons name='sc-facebook' size='' color='#0F8FF2'/>
  <Ionicons name='logo-google' size='' color='#EB4335'/>
  <AntDesign name='apple1' size='' color='#000000'/> */}

</View>
<View style={styles.resgis_con}><Text style={styles.regis_txt}>Are yor registered? To </Text>
<TouchableOpacity onPress={()=>{navigation.navigate('Login_Screen')}}><Text style={styles.login_txt}>Log In</Text></TouchableOpacity></View>
     </View>
   </ScrollView>
   </SafeAreaView>
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
  fontWeight:'700',
  fontSize:dp(28),
  lineHeight:42
},
welcome:{
  color:'black',
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
  marginTop:responsiveAverage(2)
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
  fontSize:dp(14)
},
term_of_use:{
color:'#6061F6',
fontSize:dp(14)
},

or_signup_con:{
  alignSelf:'center',

},

sign_up_txt:{
  color:'#AAAAC1',
  fontSize:13
},
resgis_con:{
 flexDirection:'row',
 paddingHorizontal:'23%',
  alignItems:'center'
},
regis_txt:{
  color:'#AAAAC1',
  fontSize:dp(14)
},
login_txt:{
color:'#6061F6'
},
signup_txt:{
  fontWeight:'600',
  fontSize:dp(16)
}

})

export default SignupScreen