import React from 'react'
import {View,Text} from 'react-native'
import SignupRoles from './components/Signup_screens/Signup_roles'
import SignupScreen from './components/Signup_screens/SignupScreen'
import OtpVerificationV1 from './components/Signup_screens/OtpVerificationV1'
import Roolup1 from './components/RollupScreens/Roolup1'
import Onboarding_welcome from './components/RollupScreens/Onboarding_welcome'
import SplashScreen from './components/RollupScreens/SplashScreen'
import SignIn1 from './components/SignInScreens/SignIn1'
import YourComponent from './components/RollupScreens/Onnew'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecoverOne from './components/RP_Screens/RecoverOne'
import { responsiveHeight } from './assets/utility'
import RecoverTwo from './components/RP_Screens/RecoverTwo'
import SignupRoles0 from './components/Signup_screens/Signup_roles0'
import MainScreens from './components/MainScreens/MainScreens'
import BottomTab from './components/MainScreens/BottomTab'


import DraftScreens1 from './components/MainScreens/MyCampaignsScreens/DraftScreens/DraftScreens1'
import DraftScreens2 from './components/MainScreens/MyCampaignsScreens/DraftScreens/DraftScreen2'
import InStoreScreen1 from './components/MainScreens/MyCampaignsScreens/InStoreScreens/InStoreScreen1'
import InStoreScreen2 from './components/MainScreens/MyCampaignsScreens/InStoreScreens/InStoreScreen2'

const Stack = createStackNavigator();
function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='BottomTab' >
  <Stack.Screen name="rollup" component={Roolup1} options={{ headerShown: false }} />
  <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false, headerTitleAlign: 'center', }} />
  <Stack.Screen name="onboarding_Welcome" component={Onboarding_welcome} options={{ headerShown: false }} />
  <Stack.Screen name="Sign_up_roll" component={SignupRoles} options={{ headerShown: false }} />
  <Stack.Screen name="Sign_up_roll0" component={SignupRoles0} options={{ headerShown: false }} />
  <Stack.Screen name="Sign_up_Screen" component={SignupScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Login_Screen" component={SignIn1} options={{ headerShown: false }} />
 
  <Stack.Screen
  name="Recover_Pass1"
  component={RecoverOne}
  options={{
    headerTitle: 'Restore password',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#6061F6',
      height:responsiveHeight(10)
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontFamily: 'Poppins-Regular',
    },
  }}
/>
<Stack.Screen name="Recover_Pass2" component={RecoverTwo} options={{ headerTitle: 'Restore password',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#6061F6',
      height:responsiveHeight(10)
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontFamily: 'Poppins-Regular',
    }, }} />
 {/* <Stack.Screen name="Main Screen" component={MainScreens} options={{ headerTitle: 'Restore password',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#6061F6',
      height:responsiveHeight(10)
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontFamily: 'Poppins-Regular',
    }, }} /> */}

<Stack.Screen name="DraftScreen1" component={DraftScreens1} options={{ headerTitle: 'Drafts',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#6061F6',
      height:responsiveHeight(10)
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontFamily: 'Poppins-Regular',
    }, }} />

    <Stack.Screen name="DraftScreen2" component={DraftScreens2} options={{ headerTitle: 'Drafts',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#6061F6',
      height:responsiveHeight(10)
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontFamily: 'Poppins-Regular',
    }, }} />
    <Stack.Screen name="InStoreScreen1" component={InStoreScreen1} options={{ headerTitle: 'In Store',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#6061F6',
      height:responsiveHeight(10)
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontFamily: 'Poppins-Regular',
    }, }} />

<Stack.Screen name="InStoreScreen2" component={InStoreScreen2} options={{ headerTitle: 'Pending',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#6061F6',
      height:responsiveHeight(10)
    },

    headerTintColor: 'white',
    headerTitleStyle: {
      fontFamily: 'Poppins-Regular',
    } }} />

</Stack.Navigator>


  </NavigationContainer>
  
  )
}

export default App

