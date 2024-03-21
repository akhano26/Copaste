import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React,{useEffect,useState,} from 'react'
import { responsiveAverage,responsiveHeight,responsiveWidth,dp } from '../../assets/utility'


const FavoritePosts = ({storesData, setStoresData}) => {

  const [favouritestore,setFavouriteStore]=useState([])

  const handleFavoriteToggle = (index) => {
    console.log(index)
    const updatedStoresData = [...storesData];
    updatedStoresData[index] = { ...updatedStoresData[index], favorite: !updatedStoresData[index].favorite };
    setStoresData(updatedStoresData);
  };

  const renderItem = ({ item, index }) => {
    return (
      item.favorite && (
        <View key={index} style={styles.single_post_con}>
          <TouchableOpacity onPress={()=>{handleFavoriteToggle(index)}} style={{ position: 'absolute', zIndex: 1, alignSelf: 'flex-end', paddingTop: '15%', paddingHorizontal: '5%' }}>
            <Image style={{ height: responsiveHeight(3.5), width: responsiveWidth(8.5) }} source={ item.favorite ? require('../../assets/filledheart.png') : require('../../assets/Posthearticon.png')} />
          </TouchableOpacity>
          <Image source={require('../../assets/post_pic.png')} style={styles.post_pic} />
          <Text style={{ color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Bold', fontSize: 14 }}>{item.storeName}</Text>
          <Text style={{ color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Regular' }}>{item.picName}</Text>
          <Text style={{ color: 'black', lineHeight: responsiveHeight(3.5), fontFamily: 'Poppins-Bold' }}>{item.price}</Text>
        </View>
      )
    );
  };
  



 
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


export default FavoritePosts

const styles = StyleSheet.create({
  single_post_con:{
    width:responsiveWidth(45),
   marginVertical:'2.5%',
    height:responsiveHeight(30)
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
   contentContainer: {
    
    paddingBottom: "70%", 
  },
})