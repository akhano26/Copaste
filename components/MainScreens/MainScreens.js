import { StyleSheet, Text, View,TouchableOpacity,Image,StatusBar,FlatList } from 'react-native'
import React,{useEffect,useState,useLayoutEffect} from 'react'
import { dp, responsiveAverage, responsiveHeight, responsiveWidth } from '../../assets/utility';
import FavoritePosts from './FavoritePosts';
import MyCampaigns from './MyCampaigns';



const MainScreens = ({navigation}) => {

const [mycampaign,setMyCampaign] =useState(true)
const [favouritescreen,setFavouriteScreen]=useState(false)

 const [storesData,setStoresData]= useState([{
    image: 'https://sendri-pic.png',
    storeName: '711 Store',
    picName: 'Picture gallery',
    price: '950 ₪ - 1,200 ₪',
    favorite:false,
    paidStatus:true
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Supermart',
    picName: 'Artworks Emporium',
    price: '800 ₪ - 1,000 ₪',
    favorite:false,
    paidStatus:true
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Market Plus',
    picName: 'Creative Studio',
    price: '700 ₪ - 900 ₪',
    favorite:false,
    paidStatus:false
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Green Grocer',
    picName: 'Art Gallery',
    price: '1,000 ₪ - 1,300 ₪',
    favorite:false,
    paidStatus:false
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Fresh Mart',
    picName: 'Photo Hub',
    price: '850 ₪ - 1,100 ₪',
    favorite:false,
    paidStatus:true
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Corner Store',
    picName: 'Gallery Outlet',
    price: '900 ₪ - 1,150 ₪',
    favorite:false,
    paidStatus:true
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Grocery World',
    picName: 'Artistic Creations',
    price: '950 ₪ - 1,200 ₪',
    favorite:false,
    paidStatus:false
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Quick Shop',
    picName: 'Picture Gallery',
    price: '750 ₪ - 950 ₪',
    favorite:false,
    paidStatus:true
},
{
    image: 'https://sendri-pic.png',
    storeName: 'Market Lane',
    picName: 'Art House',
    price: '1,100 ₪ - 1,350 ₪',
    favorite:false,
    paidStatus:false
},
{
    image: 'https://sendri-pic.png',
    storeName: 'FreshMart',
    picName: 'Creative Hub',
    price: '800 ₪ - 1,000 ₪',
    favorite:false
}])

  useEffect(() => {
    
  }, []);

  useLayoutEffect(()=>{

    navigation.setOptions({
      
      headerLeft: () => (

        <TouchableOpacity  onPress={handleLeftPress}>

         <Image source={require('../../assets/pic_left_logo.png')}  style={{ width: responsiveWidth(12), height: responsiveHeight(6), marginLeft:'10%' }}/>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={handleRightPress}>
        
        <Image source={require('../../assets/bell.png')}  style={{ width: responsiveWidth(5), height: responsiveHeight(3), marginRight:'10%' }}/>
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={{flex:1, flexDirection: 'row', alignItems: 'center',paddingLeft:'10%' }}>
          
          <Image
            source={require('../../assets/Logo.png')}
            style={{ width: responsiveWidth(35), height: responsiveHeight(3)}}
          />
        </View>
      ),
      headerStyle: {
        backgroundColor: '#6061F6',
        height: responsiveHeight(10),
      },
      headerTintColor: 'white',
      headerTitleStyle: {
      fontFamily: 'Poppins-Regular',
      },
    });
  },[])


  const handleLeftPress = () => {
    
  };
  
  const handleRightPress = () => {
    
  };


  const handleFavoriteToggle = (index) => {
    const updatedStoresData = [...storesData];
    updatedStoresData[index] = { ...updatedStoresData[index], favorite: !updatedStoresData[index].favorite };
    setStoresData(updatedStoresData);
  };


  const renderItem = ({ item, index }) => {
    
    return (
      <View key={index} style={styles.single_post_con}>
        <TouchableOpacity onPress={()=>{handleFavoriteToggle(index)}} style={{ position: 'absolute', zIndex: 1, alignSelf: 'flex-end', paddingTop: '15%', paddingHorizontal: '5%' }}>
          <Image style={{ height: responsiveHeight(3.5), width: responsiveWidth(8.5) }} source={ item.favorite?require('../../assets/filledheart.png') :require('../../assets/Posthearticon.png')} />
        </TouchableOpacity>
        <Image source={require('../../assets/post_pic.png')} style={styles.post_pic} />
        <Text style={{ color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Bold', fontSize: dp(14) }}>{item.storeName}</Text>
        <Text style={{ color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Regular' }} >{item.picName}</Text>
        <Text style={{ color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Bold' }}>{item.price}</Text>
      </View>
    );
  }
  return (

    <View style={styles.contianer}>
      <StatusBar translucent={false} backgroundColor={'#6061F6'} barStyle='light-content' />
      
       
      <View style={styles.campaign_con}>
        <Text style={{color:'black',fontFamily:'Poppins-Bold',fontSize:dp(20)}}>Campaigns</Text>
        <Image
            source={require('../../assets/Drawer.png')}
            style={{ width: responsiveWidth(13), height: responsiveHeight(6.2)}}
          />
      </View>
      <View style={styles.campaign_store_con}>
        <TouchableOpacity onPress={()=>setMyCampaign(true)} style={[styles.my_campaign_con,{ width:mycampaign?'51%':'50%',height:mycampaign?responsiveHeight(6):responsiveHeight(5),
    backgroundColor:mycampaign?'#A5A4FA':'#fff',}]}><Text style={[styles.my_campaign_txt,{color:mycampaign?'#fff':'black'}]}>My Campaigns</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setMyCampaign(false)} style={[styles.store_con,{width:mycampaign?'50%':'50%',
    backgroundColor:mycampaign?'#fff':'#A5A4FA',height:mycampaign?responsiveHeight(5):responsiveHeight(6)}]}><Text style={[styles.store_con_txt,{color:mycampaign?'black':'#fff'}]}>Store</Text></TouchableOpacity>
      </View>
      {mycampaign?(<MyCampaigns navigation={navigation}/>):(
        <>
      <View style={styles.all_campaigns_fav_con}>
         <TouchableOpacity onPress={()=>{setFavouriteScreen(false)}} style={[styles.all_campaigns_con,{ borderBottomColor:favouritescreen?'#E1E0ED':'#6061F6'}]}><Text style={[styles.all_campaigns_txt,{fontFamily:favouritescreen?'Poppins-Regular':'Poppins-Bold'}]}> 
 All Campaigns</Text></TouchableOpacity>

         <TouchableOpacity onPress={()=>{setFavouriteScreen(true)}} style={[styles.fav_con,{borderBottomColor:favouritescreen?'#6061F6':'#E1E0ED'}]}><Image style={styles.heartpic} source={require('../../assets/Hearticon.png')}/><Text style={[styles.fav_txt,{fontFamily:favouritescreen?'Poppins-Bold':'Poppins-Regular'}]}>Favorites</Text></TouchableOpacity>
      </View>
      <View style={styles.posts_con}>
        {
          favouritescreen? <FavoritePosts storesData={storesData} setStoresData={setStoresData}/>:
          <FlatList
      numColumns={2}
      data={storesData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.contentContainer}
    />
        }
       
      


      </View>
      </>)}
    </View>
  )
}

export default MainScreens

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
    borderWidth:responsiveWidth(.5),
    alignItems:'flex-start',
    flexDirection:'row',
    height:responsiveHeight(6),
    borderRadius:responsiveWidth(1),
  },

  my_campaign_con:{
    
   alignItems:'center',
   alignSelf:'center',
   width:'50%',
   height:responsiveHeight(4),
   borderRadius:5,
   flex:1,
    justifyContent:'center',
  },
  store_con:{
    flex:1,
    justifyContent:'center',
    borderRadius:5,
    height:responsiveHeight(4),
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
     width:'50%',
    alignItems:'center',
    borderBottomWidth:responsiveWidth(1),
    paddingBottom:'5%',
    
  },
  fav_con:{
    width:'50%',
    alignItems:'center',
    borderBottomWidth:responsiveWidth(1),
    paddingBottom:'5%',
    
    flexDirection:'row',
    columnGap:responsiveAverage(2),
    paddingHorizontal:'6%',
    
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