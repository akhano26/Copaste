import { StyleSheet, Text, View,ScrollView,StatusBar,Image,FlatList,TouchableOpacity  } from 'react-native'
import React, {useState} from 'react'
import {useRoute,useNavigation} from '@react-navigation/native'

import { dp, responsiveAverage, responsiveHeight, responsiveWidth } from '../../../../assets/utility';


const InStoreScreen1 = () => {

  const [IsInstaOpen,setIsInstaOpen]=useState(false)
  const [IsFacebookOpen,setIsFacebookOpen]=useState(false)
  const [IsTiktokOpen,setIsTiktokOpen] = useState(false)

  const navigation=useNavigation()
  const route=useRoute();
  //const {itemData}=route.params

  const images = [
    [require('../../../../assets/post_pic.png'),
    require('../../../../assets/post_pic.png'),
    require('../../../../assets/post_pic.png')]
  ];




const renderItem = ({ item,index }) => (
<View style={{marginTop:'12%',}}>

  <Image source={item} style={{ width:responsiveWidth(70),height:responsiveHeight(35),
  borderRadius:dp(5), }}/>
    {/* <View style={styles.dot_container}>
                  <View key={index} style={[ styles.dot]}/>
            </View> */}
</View>

);

  
  return (

    <ScrollView style={{flex:1}} contentContainerStyle={{paddingBottom:"8%"}}>
      <StatusBar translucent={false} backgroundColor={'#6061F6'} barStyle='light-content' />
    
    <FlatList
      horizontal
      data={images[0]}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ paddingHorizontal: '5%',columnGap:responsiveAverage(1.5) }} // Adjust margin left for the first item
      
    />

    <View style={{marginTop:'10%'}}>
      <View style={styles.txt_container}>
        <Text style={{color:'black',fontFamily:"Poppins-Bold",fontSize:dp(20)}}>My Campaign</Text>
        <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:dp(14)}}>Despite all modern technologies and gadgets, wristwatches still do not lose their relevance, they will always be an accessory that will put the right emphasis on a person's image. It is by the clock that you can determine the status and taste preferences of their owner. Today there are many different watch options. They are made of different alloys, decorated with precious stones, bright or solid straps, new shapes and sizes are coming into fashion. It remains only to choose according to your taste, mood and budget.</Text>
      </View>
    </View>




    <TouchableOpacity onPress={()=>{
    setIsFacebookOpen(!IsFacebookOpen)}} style={styles.whole_insta_con}>
    <View style={styles.insta_container}>
      <Image source={require('../../../../assets/facebook.png')} style={{width:responsiveWidth(10),height:responsiveHeight(5)}}/>
      <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>100-100 ₪</Text>
      <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>11</Text>
    </View>
    <TouchableOpacity onPress={()=>{
    console.log('I am Pressed')
    setIsInstaOpen(!IsInstaOpen)}} style={{flex:1,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>

      {IsFacebookOpen?
     <Image source={require('../../../../assets/UpIcon.png')}  style={{width:responsiveWidth(4.8),height:responsiveHeight(1.5)}} />:
     <Image source={require('../../../../assets/DownIcon.png')} style={{width:responsiveWidth(4.8),height:responsiveHeight(1.5)}} />
     }
    </TouchableOpacity>
   </TouchableOpacity>

   { IsFacebookOpen &&
   <TouchableOpacity style={styles.one_men_container} >
   <View style={{flexDirection:'row',columnGap:dp(8)}}>
    <Image source={require('../../../../assets/post_pic.png')} style={{width:responsiveWidth(13),height:responsiveHeight(6), borderRadius:responsiveAverage(2),}} />
    <View style={{}}>
      <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>Tiena Miller</Text>
      <View style={{flexDirection:'row',columnGap:responsiveAverage(.5)}}>
        <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>Feed</Text>
        <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>45 ₪</Text>
      </View>
    </View>
   </View>
   <View >
    <View style={styles.star_con}>
        <Image source={require('../../../../assets/Star_pic.png')} style={{width:responsiveWidth(5),height:responsiveHeight(2.5)}}/>
         <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>Star</Text>
    </View>
    <TouchableOpacity>
    <Text style={{color:'#433FF1',fontFamily:'Poppins-Regular'}}>Go to campaign</Text></TouchableOpacity>
   </View>
   </TouchableOpacity>
}




   <TouchableOpacity onPress={()=>{
    setIsInstaOpen(!IsInstaOpen)}} style={styles.whole_insta_con}>
    <View style={styles.insta_container}>
      <Image source={require('../../../../assets/Insta-Icon.png')} style={{width:responsiveWidth(10),height:responsiveHeight(5)}}/>
      <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>45-100 ₪</Text>
      <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>4</Text>
    </View>
    <TouchableOpacity onPress={()=>{
    console.log('I am Pressed')
    setIsInstaOpen(!IsInstaOpen)}} style={{flex:1,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
      {IsInstaOpen?
     <Image source={require('../../../../assets/UpIcon.png')}  style={{width:responsiveWidth(4.8),height:responsiveHeight(1.5)}} />:
     <Image source={require('../../../../assets/DownIcon.png')} style={{width:responsiveWidth(4.8),height:responsiveHeight(1.5)}} />
     }
    </TouchableOpacity>
   </TouchableOpacity>

{ IsInstaOpen &&
   <TouchableOpacity style={styles.one_men_container} >
   <View style={{flexDirection:'row',columnGap:dp(8)}}>
    <Image source={require('../../../../assets/post_pic.png')} style={{width:responsiveWidth(13),height:responsiveHeight(6), borderRadius:responsiveAverage(2),}} />
    <View style={{}}>
      <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>Tiena Miller</Text>
      <View style={{flexDirection:'row',columnGap:responsiveAverage(.5)}}>
        <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>Feed</Text>
        <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>45 ₪</Text>
      </View>
    </View>
   </View>
   <View >
    <View style={styles.star_con}>
        <Image source={require('../../../../assets/Star_pic.png')} style={{width:responsiveWidth(5),height:responsiveHeight(2.5)}}/>
         <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>Star</Text>
    </View>
    <TouchableOpacity>
    <Text style={{color:'#433FF1',fontFamily:'Poppins-Regular'}}>Go to campaign</Text></TouchableOpacity>
   </View>
   </TouchableOpacity>
}

<TouchableOpacity onPress={()=>{setIsTiktokOpen(!IsTiktokOpen)}} style={styles.whole_insta_con}>
    <View style={styles.insta_container}>
      <Image source={require('../../../../assets/Tiktok.png')} style={{width:responsiveWidth(10),height:responsiveHeight(5)}}/>
      <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>45-100 ₪</Text>
      <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>4</Text>
    </View>
    <TouchableOpacity onPress={()=>{
    setIsInstaOpen(!IsInstaOpen)}} style={{flex:1,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
      {IsTiktokOpen?
     <Image source={require('../../../../assets/UpIcon.png')}  style={{width:responsiveWidth(4.8),height:responsiveHeight(1.5)}} />:
     <Image source={require('../../../../assets/DownIcon.png')} style={{width:responsiveWidth(4.8),height:responsiveHeight(1.5)}} />
     }
    </TouchableOpacity>
   </TouchableOpacity>

   { IsTiktokOpen &&
   <TouchableOpacity onPress={()=>{navigation.navigate('InStoreScreen2')}} style={styles.one_men_container} >
   <View style={{flexDirection:'row',columnGap:dp(8)}}>
    <Image source={require('../../../../assets/post_pic.png')} style={{width:responsiveWidth(13),height:responsiveHeight(6), borderRadius:responsiveAverage(2),}} />
    <View style={{}}>
      <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>Tiena Miller</Text>
      <View style={{flexDirection:'row',columnGap:responsiveAverage(.5)}}>
        <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>Feed</Text>
        <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>45 ₪</Text>
      </View>
    </View>
   </View>
   <View >
    <View style={styles.star_con}>
        <Image source={require('../../../../assets/Star_pic.png')} style={{width:responsiveWidth(5),height:responsiveHeight(2.5)}}/>
         <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>Star</Text>
    </View>
    <TouchableOpacity>
    <Text style={{color:'#433FF1',fontFamily:'Poppins-Regular'}}>Go to campaign</Text></TouchableOpacity>
   </View>
   </TouchableOpacity>
}

   <View style={styles.btn_con}>
   <TouchableOpacity style={styles.Stats_btn}>
      <Text style={{fontSize:dp(16),color:'#fff',fontFamily:'Poppins-Medium'}}>SEND PROPOSE</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.single_btn}><Text style={{fontSize:dp(16),color:'#433FF1',fontFamily:'Poppins-Medium'}}>EDIT</Text></TouchableOpacity>
    <TouchableOpacity style={styles.single_btn}><Text style={{fontSize:dp(16),color:'#433FF1',fontFamily:'Poppins-Medium'}}>CLOSE CAMPAIGN</Text></TouchableOpacity>
   </View>
 
 
   </ScrollView>
   
  )
}

export default InStoreScreen1

const styles = StyleSheet.create({
  dot_container:{
    position:'absolute',
    bottom:35,
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  dot:{
    height:responsiveHeight(1),
    borderRadius:6,
    marginHorizontal:3,
    backgroundColor:'#ccc'
  },
  txt_container:{
    marginTop:'1%',
    marginHorizontal:'5%',
    borderBottomColor:'#E1E0ED',
    borderBottomWidth:2,
    paddingBottom:'3%'},

    insta_container:{
      flexDirection:'row',
      alignItems:'center',
      columnGap:responsiveAverage(2)},

      whole_insta_con:{
        flex:1,
        columnGap:responsiveAverage(11),
        flexDirection:'row' ,
        width:'90%',
        alignSelf:'center',
        paddingVertical:'5%',
        borderBottomColor:'#E1E0ED',
        borderBottomWidth:2,
      },
      one_men_container:{
      flexDirection:'row',
      alignSelf:'center',
      width:'90%',
      flex:1,
      justifyContent:'space-between',
      margin:'2%'},

      star_con:{
        flexDirection:'row',
        columnGap:dp(5),
        justifyContent:'flex-end'
      },
      btn_con:{
        marginTop:'5%',
         width:'90%',
         alignSelf:"center",
         rowGap:responsiveAverage(1)
      },
      single_btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:responsiveHeight(6),
        borderWidth:1,
        borderColor:'#433FF1',
        borderRadius:responsiveAverage(.5)
      },
      Stats_btn:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        paddingLeft:'4%',
        height:responsiveHeight(6),
       
        backgroundColor:'#433FF1',
       columnGap:responsiveAverage(1),
        borderRadius:responsiveAverage(.5)
      }
})