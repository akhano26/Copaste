import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreens from './MainScreens';
import Onboarding_welcome from '../RollupScreens/Onboarding_welcome';
import SignIn1 from '../SignInScreens/SignIn1';
import SignupRoles0 from '../Signup_screens/Signup_roles0';
import SignupScreen from '../Signup_screens/SignupScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { dp, responsiveAverage, responsiveHeight, responsiveWidth } from '../../assets/utility';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();


const BottomTab = () => {

  return (

    <Tab.Navigator screenOptions={{
      tabBarLabelPosition:'beside-icon',
  
      tabBarShowLabel:false,
      tabBarStyle:{
        position:'absolute',bottom:0,right:0,left:0,elevation:0,height:responsiveHeight(8),backgroundColor:'#fff',
        paddingBottom:Platform.OS=='android'?'4%':0
      }
    }}>
      <Tab.Screen name='Home' component={MainScreens} options={{
        
        tabBarIcon:({focused})=>{
          return(
          <View style={{alignItems:'center',justifyContent:'center', width:responsiveWidth(10)}}>
        <FontAwesome name={'home'} size={dp(24)}  color={focused?'#6061F6':'#AAAAC1'} />
          <Text style={{fontSize:8,color:focused?'#6061F6':'#AAAAC1'}}>Feed</Text>
          </View>
   ) }
      }}/>
      <Tab.Screen name='Search' component={Onboarding_welcome}
      options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
          return(
          <View style={{alignItems:'center',justifyContent:'center',width:responsiveWidth(15)}}>
      <FontAwesome name="bookmark" size={dp(24)}  color={focused?'#6061F6':'#AAAAC1'} />
          <Text style={{fontFamily:'Poppins-Regular', fontSize:dp(8),color:focused?'#6061F6':'#AAAAC1'}}>Campaigns</Text>
          </View>
   ) }
      }}/>
      <Tab.Screen name='About' component={SignIn1}
      options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
          return(
            <View
            style={{
              top:responsiveAverage(.5),
              width:responsiveWidth(14),
              height:responsiveHeight(5),
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:'#fff',
              borderRadius:responsiveAverage(1),
              borderColor:focused?'#6061F6':'#AAAAC1',
              borderWidth:dp(1)
              
            }}>
<Ionicons name="add" size={24} color={focused?'#6061F6':'#AAAAC1'}  />
            </View>
          )
        }
          
        
      }}
      />
      <Tab.Screen name='Setting' component={SignupRoles0}
      options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
          return(
          <View style={{alignItems:'center',justifyContent:'center',width:responsiveWidth(15)}}>
       <Ionicons name="people" size={dp(24)} color={focused?'#6061F6':'#AAAAC1'}  />
          <Text style={{fontSize:8,color:focused?'#6061F6':'#AAAAC1'}}>Copasters</Text>
          </View>
   ) }
      }}/>
      <Tab.Screen name='Transition' component={SignupScreen}
      options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
          return(
          <View style={{alignItems:'center',justifyContent:'center',width:responsiveWidth(15)}}>
      <AntDesign name="settings" size={dp(24)} color={focused?'#6061F6':'#AAAAC1'} />
          <Text style={{fontSize:8,color:focused?'#6061F6':'#AAAAC1'}}>Menu</Text>
          </View>
   ) }
      }}/>
     

    </Tab.Navigator>
   
  )
}

export default BottomTab

const styles = StyleSheet.create({})