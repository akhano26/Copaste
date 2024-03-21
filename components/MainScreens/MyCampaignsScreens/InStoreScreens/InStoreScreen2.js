import { StyleSheet, Text, View,ScrollView,StatusBar,Image,FlatList,Modal,TouchableOpacity  } from 'react-native'
import React, {useState} from 'react'
import {useRoute,useNavigation} from '@react-navigation/native'
import { dp, responsiveAverage, responsiveHeight, responsiveWidth } from '../../../../assets/utility';


const InStoreScreen2 = () => {

const [showModal,setshowModal]=useState(false)
 

  const navigation=useNavigation()
  const route=useRoute();


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




   <View style={{width:'90%',alignSelf:'center',paddingVertical:'3%',   borderBottomColor:'#E1E0ED',
    borderBottomWidth:2,}}>
    <Text style={{color:'black',fontSize:dp(14),fontFamily:'Poppins-Medium'}}>Pending copaster</Text>
    </View> 


    <Modal transparent={true} style={{height:'100%',width:'100%'}} visible={showModal} animationType='fade'>
     
     <View style={styles.centeredview}>
     
       <View style={styles.modalview}>
         <TouchableOpacity style={{alignItems:'flex-end',paddingRight:"4%",paddingTop:'4%',}} onPress={()=>{setshowModal(false)}} >
      <Image style={{color:'black'}} source={require('../../../../assets/CrossIcon.png')}/></TouchableOpacity>
       <View style={{alignItems:'center',paddingBottom:'8%'}} >
        <Image source={require('../../../../assets/Thanks_pic.png')} style={{width:responsiveWidth(55),height:responsiveHeight(18)}}/>
       </View>
      <View style={styles.inputModal}>
       <Text style={{color:'black',fontFamily:'Poppins-Bold',fontSize:dp(24)}}>Thanks!</Text>
       <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:dp(14),textAlign:'center'}}>Thank you for your approval</Text>
      </View>
     <TouchableOpacity onPress={()=>{navigation.navigate('InStoreScreen1')
    setshowModal(false)}}  style={styles.savebtn}><Text style={styles.txt}>BACK</Text></TouchableOpacity>
     </View>
     </View>

   </Modal>
    <TouchableOpacity onPress={()=>{setshowModal(true)}} style={styles.one_men_container} >
   <View style={{flexDirection:'row',columnGap:dp(8)}}>
    <Image source={require('../../../../assets/post_pic.png')} style={{width:responsiveWidth(13),height:responsiveHeight(6), borderRadius:responsiveAverage(2)}} />
    <View style={{}}>
      <Text style={{color:'black',fontFamily:'Poppins-Regular',}}>Tiena Miller</Text>
      <View style={{flex:1,flexDirection:'row',columnGap:responsiveAverage(.5),alignItems:'flex-end',height:responsiveHeight(3)}}>
      <Image source={require('../../../../assets/Insta-Icon.png')} style={{width:responsiveWidth(6),height:responsiveHeight(3)}}/>
        <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>Feed</Text>
      
      </View>
    </View>
   </View>
   <View >
    <View style={styles.star_con}>
        
         <Text style={{color:'black',fontFamily:'Poppins-Regular'}}>45 ₪</Text>
    </View>
    </View>
   </TouchableOpacity>
   


   <View style={styles.btn_con}>
   <TouchableOpacity style={styles.Stats_btn}>
      <Text style={{fontSize:dp(16),color:'#fff',fontFamily:'Poppins-Medium'}}>APROVE</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.single_btn}><Text style={{fontSize:dp(16),color:'#433FF1',fontFamily:'Poppins-Medium'}}>DECLINE</Text></TouchableOpacity>
    
   </View>
 
 
   </ScrollView>
   
  )
}

export default InStoreScreen2

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
    width:'90%',
    alignSelf:'center',
    marginTop:'1%',
    
    borderBottomColor:'#E1E0ED',
    borderBottomWidth:2,
    paddingBottom:'3%'},

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
      },
      one_men_container:{
        flexDirection:'row',
        alignSelf:'center',
        width:'90%',
        flex:1,
        justifyContent:'space-between',
        marginVertical: '7%',
      },

      star_con:{
        flexDirection:'row',
        columnGap:dp(5),
        marginTop:'27%'
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
          height:responsiveHeight(52)
        },
        inputModal:{
          alignItems:'center',
           marginTop:"0%",
           marginBottom:'4%',
           width:'100%',
           borderRadius:10,
         },
         savebtn:{
          alignItems:'center',
          justifyContent:'center',
          alignSelf:'center',
          backgroundColor:'#6061F6',
          height:responsiveHeight(8),
          
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
         fontFamily:'Poppins-Medium',
          fontSize:dp(16),
          color:'white'
        },
  
})