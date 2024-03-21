import React, {useState} from 'react'
import {View,Text,StyleSheet,StatusBar,ScrollView,Pressable, TouchableOpacity,ActivityIndicator,Modal} from 'react-native'
import { dp, responsiveAverage, responsiveHeight, responsiveWidth } from '../../assets/utility';
import { TextInput }  from 'react-native-paper';
// import EvilIcons from 'react-native-vector-icons/EvilIcons'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import AntDesign from 'react-native-vector-icons/AntDesign'


function RecoverTwo({navigation}) {
  
 

const [password,setPassword]=useState('')
const [confirmpassword,setconfirmPassword]=useState('')
  
const [closeEye, setCloseEye] = useState(false);
  const togglePasswordVisibility = () => {
    setCloseEye(!closeEye);
  };
  

  const handleSignUp = () => {
     // Placeholder function to simulate sending the password recovery link
   
  };

  const isSignUpDisabled = !password||!confirmpassword;

  return (
    <View style={{flex:1}}>
   <ScrollView style={styles.container } contentContainerStyle={{flexGrow:1}}>
  <StatusBar translucent={false} backgroundColor={'#6061F6'} barStyle='light-content' />
  
     <View style={styles.all_inputs}>
        
     <TextInput
          style={styles.input}
          mode="outlined"
          label="New password"
          secureTextEntry={!closeEye}
          value={password}
          onChangeText={setPassword}
          right={<TextInput.Icon icon={closeEye ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility} />}
        />
         <TextInput
          style={styles.input}
          mode="outlined"
          label="Repeat password"
          secureTextEntry={!closeEye}
          value={confirmpassword}
          onChangeText={setconfirmPassword}
          right={<TextInput.Icon icon={closeEye ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility} />}
        />
        
      </View>
      <View style={{flex:1,justifyContent:'flex-end'}}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button]}
        disabled={isSignUpDisabled}
        onPress={handleSignUp}
      >
        <Text style={[styles.signup_txt, { color: isSignUpDisabled ? '#A5A4FA' : 'white' }]}>Save</Text>
      </TouchableOpacity>
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



all_inputs:{
  marginTop:'12%',
  rowGap:responsiveAverage(1)
},
input:{
  alignSelf:'center',
 
  width: responsiveWidth(90),
height:responsiveHeight(8),
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
 marginBottom:'10%'
},










signup_txt:{
  fontWeight:'600',
  fontSize:dp(16)
},





})

export default RecoverTwo