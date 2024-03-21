import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList,StatusBar } from 'react-native'
import React,{useState} from 'react'
import FavoritePosts from './FavoritePosts'
import { responsiveAverage,responsiveHeight,responsiveWidth,dp } from '../../assets/utility'
import Drafts from './MyCampaignsScreens/Drafts'
import InStroe from './MyCampaignsScreens/InStroe'
import Past from './MyCampaignsScreens/Past'
const MyCampaigns = ({navigation}) => {

  const [OnAirScreen,setOnAirScreen]=useState(true)
  const [InStoreScreen,setInStoreScreen]=useState(false)
  const [PastScreen,setPastScreen]=useState(false)
  const [DraftsScreen,setDraftsScreen]=useState(false)

  const [storesData,setStoresData]= useState([{
    image: 'https://sendri-pic.png',
    storeName: '711 Store',
    picName: 'Picture gallery',
    price: '950 ₪ - 1,200 ₪',
    favorite:false,
    paidStatus:true,
    aproveStatus:false
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Supermart',
    picName: 'Artworks Emporium',
    price: '800 ₪ - 1,000 ₪',
    favorite:false,
    paidStatus:true,
    aproveStatus:false
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Market Plus',
    picName: 'Creative Studio',
    price: '700 ₪ - 900 ₪',
    favorite:false,
    paidStatus:false,
    aproveStatus:true
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Green Grocer',
    picName: 'Art Gallery',
    price: '1,000 ₪ - 1,300 ₪',
    favorite:false,
    paidStatus:false,
    aproveStatus:true
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Fresh Mart',
    picName: 'Photo Hub',
    price: '850 ₪ - 1,100 ₪',
    favorite:false,
    paidStatus:true,
    aproveStatus:true
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Corner Store',
    picName: 'Gallery Outlet',
    price: '900 ₪ - 1,150 ₪',
    favorite:false,
    paidStatus:true,
    aproveStatus:false
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Grocery World',
    picName: 'Artistic Creations',
    price: '950 ₪ - 1,200 ₪',
    favorite:false,
    paidStatus:false,
    aproveStatus:false
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Quick Shop',
    picName: 'Picture Gallery',
    price: '750 ₪ - 950 ₪',
    favorite:false,
    paidStatus:true,
    aproveStatus:false
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Market Lane',
    picName: 'Art House',
    price: '1,100 ₪ - 1,350 ₪',
    favorite:false,
    paidStatus:false,
    aproveStatus:true
},
{
    image: 'https://sendri-pic.png',
    storeName: 'FreshMart',
    picName: 'Creative Hub',
    price: '800 ₪ - 1,000 ₪',
    favorite:false,
    paidStatus:true,
    aproveStatus:true
}])

const renderItem = ({ item, index }) => {
    
  return (
    <TouchableOpacity key={index} style={styles.single_post_con}>
      {/* <TouchableOpacity onPress={()=>{handleFavoriteToggle(index)}} style={{ position: 'absolute', zIndex: 1, alignSelf: 'flex-end', paddingTop: '15%', paddingHorizontal: '5%' }}>
        <Image style={{ height: responsiveHeight(3.5), width: responsiveWidth(8.5) }} source={ item.favorite?require('../../assets/filledheart.png') :require('../../assets/Posthearticon.png')} />
      </TouchableOpacity> */}
      <Image source={require('../../assets/post_pic.png')} style={styles.post_pic} />
      <Text style={{ color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Bold', fontSize: dp(14) }} >{item.storeName}</Text>
      {/* <Text style={{ color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Regular' }} >{item.picName}</Text> */}
      <Text style={{ fontSize:dp(14),color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Bold' }}>{item.price}</Text>
    </TouchableOpacity>
  );
}

const conditionBaseRendring=()=>{
  
    if(OnAirScreen&&!InStoreScreen&&!PastScreen&&!DraftsScreen) { 
    return <FlatList
numColumns={2}
data={storesData}
renderItem={renderItem}
keyExtractor={(item, index) => index.toString()}
contentContainerStyle={styles.contentContainer}
/>}
else if( !OnAirScreen&&InStoreScreen&&!PastScreen&&!DraftsScreen){
 return < InStroe storesData={storesData}/>
}
else if( !OnAirScreen&&!InStoreScreen&&PastScreen&&!DraftsScreen){
  return <Past storesData={storesData} navigation={navigation}/>
 }
 else if (!OnAirScreen&&!InStoreScreen&&!PastScreen&&DraftsScreen){
  return <Drafts storesData={storesData}/>
 }
}

  return (
    <>
      <View style={styles.all_campaigns_fav_con}>
        <StatusBar backgroundColor='#6061F6'/>
         <TouchableOpacity onPress={()=>{setOnAirScreen(true),setDraftsScreen(false),setInStoreScreen(false),setPastScreen(false)}} style={[styles.all_campaigns_con,{ borderBottomColor:OnAirScreen?'#6061F6':'#E1E0ED'}]}><Text style={[styles.all_campaigns_txt,{fontFamily:OnAirScreen?'Poppins-Bold':'Poppins-Regular'}]}> 
 On Air</Text></TouchableOpacity>

         <TouchableOpacity onPress={()=>{setOnAirScreen(false),setDraftsScreen(false),setInStoreScreen(true),setPastScreen(false)}} style={[styles.fav_con,{borderBottomColor:InStoreScreen?'#6061F6':'#E1E0ED'}]}><Text style={[styles.fav_txt,{fontFamily:InStoreScreen?'Poppins-Bold':'Poppins-Regular'}]}>In store</Text></TouchableOpacity>
         
         <TouchableOpacity onPress={()=>{setOnAirScreen(false),setDraftsScreen(false),setInStoreScreen(false),setPastScreen(true)}} style={[styles.fav_con,{borderBottomColor:PastScreen?'#6061F6':'#E1E0ED'}]}><Text style={[styles.fav_txt,{fontFamily:PastScreen?'Poppins-Bold':'Poppins-Regular'}]}>Past</Text></TouchableOpacity>
         
         <TouchableOpacity onPress={()=>{setOnAirScreen(false),setDraftsScreen(true),setInStoreScreen(false),setPastScreen(false)}} style={[styles.fav_con,{borderBottomColor:DraftsScreen?'#6061F6':'#E1E0ED'}]}><Text style={[styles.fav_txt,{fontFamily:DraftsScreen?'Poppins-Bold':'Poppins-Regular'}]}>Drafts</Text></TouchableOpacity>
      </View>
      <View style={styles.posts_con}>
        
       {conditionBaseRendring()}
      


      </View></>
  )
}

export default MyCampaigns

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