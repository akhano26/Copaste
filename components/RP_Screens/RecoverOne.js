import React, {useState} from 'react'
import {View,Text,StyleSheet,StatusBar,ScrollView,Pressable, TouchableOpacity,ActivityIndicator,Modal} from 'react-native'
import { dp, responsiveAverage, responsiveHeight, responsiveWidth } from '../../assets/utility';
import { TextInput }  from 'react-native-paper';
// import EvilIcons from 'react-native-vector-icons/EvilIcons'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import AntDesign from 'react-native-vector-icons/AntDesign'


function RecoverOne({navigation}) {
  
 
  const [email, setEmail] = useState('');
  const [showModal,setshowModal]=useState(false)

  const [isSending, setIsSending] = useState(false);


  

  const handleSignUp = () => {
     // Placeholder function to simulate sending the password recovery link
     setIsSending(true);
     setTimeout(() => {
       setIsSending(false);
       setshowModal(true)
     }, 2000);
  };

  const isSignUpDisabled = !email;

  return (
    <View style={{flex:1}}>
   <ScrollView style={styles.container } contentContainerStyle={{flexGrow:1}}>
  <StatusBar translucent={false} backgroundColor={'#6061F6'} barStyle='light-content' />
  <View style={styles.text_container}>
    <Text style={styles.heading}>Restore password</Text>
    <Text style={styles.welcome}>Enter the e-mail indicated upon registration - we will send you
password recovery link</Text>
     </View>
     <View style={styles.all_inputs}>
        
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        
      </View>
      <Modal transparent={true} style={{height:'100%',width:'100%'}} visible={showModal} animationType='fade'>
     
        <View style={styles.centeredview}>
        
          <View style={styles.modalview}>
            <TouchableOpacity onPress={()=>{setshowModal(false)}} >
          <Text style={{textAlign:"right",paddingRight:"4%",paddingTop:'4%',color:'black'}}>X</Text></TouchableOpacity>
         <View style={styles.inputModal}>
          <Text style={{color:'black',fontFamily:'Poppins-Bold',fontSize:dp(24)}}>Check your mail!</Text>
          <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:dp(14),textAlign:'center'}}>A letter with instructions for password recovery has been sent to the specified email</Text>
         </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Recover_Pass2')}  style={styles.savebtn}><Text style={styles.txt}>Go to Mail</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setshowModal(false)}} style={styles.deletebtn}><Text style={[styles.txt,{color:'#6061F6'}]}>CANCEL</Text></TouchableOpacity>
        </View>
        </View>

      </Modal>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button]}
        disabled={isSignUpDisabled}
        onPress={handleSignUp}
      >
        <Text style={[styles.signup_txt, { color: isSignUpDisabled ? '#A5A4FA' : 'white' }]}>Send</Text>
      </TouchableOpacity>
      {isSending && (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="large" color="#6061F6" />
          </View>
        )}
    
     <View style={styles.logo_container_main}>

<View style={styles.resgis_con}><Text style={styles.regis_txt}> I remembered my password! </Text>

<TouchableOpacity style={{marginBottom:'1.2%'}} onPress={()=>{navigation.navigate('Login_Screen')}}><Text style={styles.login_txt}>Return</Text></TouchableOpacity></View>
     </View>
     {isSending && (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="large" color="#6061F6" />
          </View>
        )}
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
  marginTop:'20%'
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
  marginTop:'12%',
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
  marginTop:'16%'
},







resgis_con:{
 flexDirection:'row',
 paddingHorizontal:'12%',
  alignItems:'center',
  
  marginTop:'17%'
},
regis_txt:{
  fontFamily:'Poppins-Regular',
  color:'#AAAAC1',
  fontSize:dp(14)
},
login_txt:{
color:'#6061F6',

},
signup_txt:{
  fontWeight:'600',
  fontSize:dp(16)
},


activityIndicatorContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
},
centeredview:{
  flex:1,
  justifyContent:'flex-start',
  paddingTop:'26%',
  width:'100%',
  alignItems:'center',
},
modalview:{
  backgroundColor:'white',
 paddingHorizontal:'3%',
 paddingVertical:'3%',
  borderRadius:responsiveAverage(.7),
  shadowColor:'black',
  elevation:5,
  width:'94%',
  height:responsiveHeight(44)
},
inputModal:{
 alignItems:'center',
  marginTop:"-5%",
  marginBottom:'4%',
  width:'100%',
  borderRadius:10,
  
},
savebtn:{
  alignItems:'center',
  alignSelf:'center',
  backgroundColor:'#6061F6',
  height:responsiveHeight(8),
  paddingTop:'7%',
  width:responsiveWidth(85),
  borderRadius:responsiveAverage(.5),
  marginTop:'6%'
},
deletebtn:{
  alignItems:'center',
  alignSelf:'center',
  backgroundColor:'white',
  height:responsiveHeight(8),
  width:responsiveWidth(85),
  paddingTop:'7%',
  borderColor:'#6061F6',
  borderWidth:.5,
  borderRadius:responsiveAverage(.5),
  marginTop:'6%'
},
txt:{
  fontFamily:'Poppins-Bold',
  color:'white'
}

})

export default RecoverOne