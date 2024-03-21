import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { responsiveAverage,responsiveHeight,responsiveWidth,dp } from '../../../assets/utility'
import {useNavigation} from '@react-navigation/native'


const InStroe = ({storesData}) => {
const navigation=useNavigation()

  const renderItem = ({ item, index }) => {
    
    return (
      <TouchableOpacity onPress={()=>{navigation.navigate("InStoreScreen1")}} key={index} style={styles.single_post_con}>
        {/* <TouchableOpacity onPress={()=>{handleFavoriteToggle(index)}} style={{ position: 'absolute', zIndex: 1, alignSelf: 'flex-end', paddingTop: '15%', paddingHorizontal: '5%' }}>
          <Image style={{ height: responsiveHeight(3.5), width: responsiveWidth(8.5) }} source={ item.favorite?require('../../../assets/filledheart.png') :require('../../../assets/Posthearticon.png')} />
        </TouchableOpacity> */}
        <Image source={require('../../../assets/post_pic.png')} style={styles.post_pic} />
        <Text style={{ color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Bold', fontSize: dp(14)}} >{item.storeName}</Text>
       
        <Text style={{ color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Bold',fontSize:dp(14) }}>{item.price}</Text>
         <Text style={{ color: '#6061F6', lineHeight: responsiveHeight(3.5),fontSize:dp(12), fontFamily: 'Poppins-Regular' }} >Active</Text>
      </TouchableOpacity>
    );
  }
  return (
    <FlatList
    numColumns={2}
    data={storesData}
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
    contentContainerStyle={styles.contentContainer}
    />
  )
}

export default InStroe

const styles = StyleSheet.create({
  
  contentContainer: {
    
    paddingBottom: "87%", // Add paddingBottom to ensure all items are visible
  },
  contianer:{
    flex:1,
    backgroundColor:'white'
  },
  campaign_con:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'ornage',
    marginTop:'5%',
    marginHorizontal:'5%',
    
  },

  campaign_store_con:{
    width:'90%',
    marginTop:'8%',
    alignSelf:'center',
    borderColor:'#E1E0ED',
    borderWidth:1,
    alignItems:'flex-start',
    flexDirection:'row',
    height:responsiveHeight(6),
    borderRadius:3,
   
  },

  my_campaign_con:{
    
   alignItems:'center',
   alignSelf:'center',
   width:'50%',
   height:responsiveHeight(6),
   borderRadius:5,
   paddingTop:'3%',
  },
  store_con:{
    paddingTop:'3%',
    borderRadius:5,
    height:responsiveHeight(6),
    width:'51%',
    backgroundColor:'#A5A4FA',
alignItems:'center',
alignSelf:'center',

  }, 

  my_campaign_txt:{
    color:'black',
    fontFamily:'Poppins-Regular'
  },

  store_con_txt:{
    fontFamily:'Poppins-Regular'
  },

  all_campaigns_fav_con:{
     alignSelf:'center',
     width:'90%',
     flexDirection:'row',
     marginTop:'8%'
     
  },
  all_campaigns_con:{
     width:'25%',
    alignItems:'center',
    borderBottomWidth:responsiveWidth(1),
    paddingBottom:'5%',
    
  },
  fav_con:{
    width:'25%',
   
    borderBottomWidth:responsiveWidth(1),
    paddingBottom:'5%',
    alignSelf:'center',
    paddingLeft:'5%',
    flexDirection:'row',
    columnGap:responsiveAverage(2),
    
  },

  all_campaigns_txt:{
    color:'black',
    fontFamily:'Poppins-Regular'
  },
  fav_txt:{
    fontFamily:'Poppins-Bold',
    color:'black'
  },
  heartpic:{
    height:responsiveHeight(3.5),
    width:responsiveWidth(8.5)
  },
  posts_con:{
   alignSelf:'center',
   width:'90%',
   marginTop:'5%',
   
   

  },

post_pic:{
 width:responsiveWidth(42),
 height:responsiveHeight(20)
},
single_post_con:{
  width:responsiveWidth(45),
 marginVertical:'2.5%',
  height:responsiveHeight(30)
}



})