import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState,useRef, useEffect } from 'react';
import { useSharedValue, withSpring } from 'react-native-reanimated'; // Importing Reanimated functions
import frame1 from '../../assets/frame1.png';
import { responsiveAverage, responsiveHeight, responsiveWidth, dp } from '../../assets/utility';
import Carousel from 'react-native-reanimated-carousel';
import frame2 from '../../assets/frame2.png';
import frame3 from '../../assets/frame3.png';

const data = [
    {
        id: 1,
        image: frame1,
        text1: 'Copaste',
        text2: 'Word-of-mouth mutual income service. You to me - I to you.',
        text3: 'Word-of-mouth mutual income service. You to me - I to you.',
    },
    {
        id: 2,
        image: frame2,
        text1: 'Find a copaster',
        text2: 'Word-of-mouth mutual income service. You to me - I to you.',
        text3: 'Word-of-mouth mutual income service. You to me - I to you.',
    },
    {
        id: 3,
        image: frame3,
        text1: 'Increase in sales',
        text2: 'Word-of-mouth mutual income service. You to me - I to you.',
        text3: 'Word-of-mouth mutual income service. You to me - I to you.',
    },
    
];

const Roolup1 = ({navigation}) => {
  const indexlop=useRef();
  const [activeIndex, setActiveIndex] = useState(0);
    const width = Dimensions.get('window').width;
    const [currentIndex, setCurrentIndex] = useState(0); // State to track current slide index

    const handleNext = () => {
      
        if (activeIndex < data.length - 1) {
          
            indexlop.current.next()
        }
    };

    const handleBack = () => {
    
        if (activeIndex > 0 && activeIndex<data.length) {
          
       indexlop.current.prev();
        }
    };

    return (
        <View style={styles.container}>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
            <Carousel
                ref={indexlop}
                width={width}
                height={responsiveHeight(90)}
                autoPlay={false}
                 loop={false}
                data={data}
                onSnapToItem={(index) => setActiveIndex(index)}
                initialIndex={currentIndex} // Set initial index to the current index
                // onIndexChanged={index =>{ 
                //   console.log(index)
                //   setCurrentIndex(index)}} // Update current index
                renderItem={({ item }) => (
                    <View style={{ flex: 1 }}>
                        <Image style={styles.pic} source={item.image} />

                        <View style={styles.text_con}>
                            <Text style={styles.heading}>{item.text1}</Text>
                            <Text style={styles.body}>{item.text2}</Text>
                            <Text style={styles.body1}>{item.text3}</Text>
                        </View>
                    </View>
                )}
            />
            <View style={styles.dot_container}>
            <TouchableOpacity onPress={handleBack}>
                    <Text style={styles.button1}>Back</Text>
                </TouchableOpacity>
                {
              
              data.map((_,index)=>{
                return(
                  <View key={index} style={[ styles.dot,{backgroundColor:activeIndex==index?'#6061F6':'#ccc',
                width:activeIndex==index?responsiveWidth(8):responsiveWidth(3)}]}/>
                )
              })
            } 
             
             {activeIndex === data.length - 1 ? (
  <TouchableOpacity onPress={()=>{navigation.navigate('onboarding_Welcome')}}>
    <Text style={styles.button2}>Next</Text>
  </TouchableOpacity>
) : (
  <TouchableOpacity onPress={handleNext}>
    <Text style={styles.button2}>Upcoming</Text>
  </TouchableOpacity>
)}


            </View>
        </View>
    )
}

export default Roolup1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    pic: {
        alignSelf: 'center',
        height: responsiveHeight(55),
        width: responsiveWidth(100),
        borderBottomLeftRadius: responsiveAverage(2),
        borderBottomRightRadius: responsiveAverage(2)
    },
    text_con: {
        paddingHorizontal: responsiveAverage(2),
        marginTop: responsiveAverage(2)
    },
    heading: {
        fontSize: dp(32),
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Poppins-Bold'
    },
    body: {
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        color: 'black',
        fontSize: dp(18),
        lineHeight: responsiveAverage(3)
    },
    body1: {
        textAlign: 'center',
        color: 'black',
        fontSize: dp(18),
        lineHeight: responsiveAverage(3)
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
    },
    button1: {
        fontSize: 18,
        color: 'blue',
        textDecorationLine: 'underline',
        paddingRight:'22%'
    },
    button2:{
      fontSize: 18,
      color: 'blue',
      textDecorationLine: 'underline',
     paddingLeft:'22%'
    },
   
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
    }
});

