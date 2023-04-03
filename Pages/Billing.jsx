import {  View,
    Text,
    Image,
    StyleSheet,
    Button,
    Pressable,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity, } from 'react-native'
import React from 'react'
import {LinearTextGradient} from 'react-native-text-gradient';

export default function Billing({navigation}) {
  return (
    <ImageBackground
      source={require('../assests/original.png')}
      style={styles.mainbody}>
      <View style={styles.topbox}>
        <TouchableOpacity onPress={() => navigation.navigate('Mainpage')}>
          <Image source={require('../assests/back.png')} />
        </TouchableOpacity>
        <LinearTextGradient
          style={{fontWeight: 'bold', fontSize: 35, paddingTop: 15}}
          locations={[0, 1]}
          colors={['#C6C6C6', '#C6C6C6']}
          start={{x: 1, y: 43}}
          end={{x: 1, y: 3}}>
          <Text style={{width: '100%'}}>Checkout</Text>
        </LinearTextGradient>
        <LinearTextGradient
          style={{fontWeight: '400', fontSize: 30}}
          locations={[0, 1]}
          colors={['#FFFFFF', '#C5C5C5']}
          start={{x: 5, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={{fontSize: 19}}>2 items</Text>
        </LinearTextGradient>
        <View style={styles.address}>
            <View style={{display:"flex",flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
        <Text style={{color:"#93E396",opacity:0.8,fontSize:18,padding:3}}>Deliver to:</Text>
        <TouchableOpacity style={{backgroundColor:"#C5C5C5",opacity:0.8,padding:5,borderRadius:3,marginRight:8}}><Text style={{color:"black",fontSize:14,fontWeight:"600"}}>Change</Text></TouchableOpacity>
           </View>
        <Text style={{color:"#FFFF",opacity:0.8,fontSize:16,padding:5}}>Adam Collins</Text>
        <Text style={{color:"#C5C5C5",opacity:0.8,fontSize:16,padding:5}}>3144 Hickory Lane ,Washington Dc ,United States 20024</Text>
        </View>
      </View>
      <View style={styles.subbody}>
        <ScrollView style={styles.cartbody}>
      
          <TouchableOpacity style={styles.cartitem}>
            <View style={styles.leftbox}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                }}
                source={require('../assests/akmjpg.jpg')}
              />
            </View>
            <View style={styles.rightbox}>
              <View style={styles.righttop}>
                <Text
                  style={{
                    color: '#C5C5C5',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingBottom: 5,
                  }}>
                  AKM Adjustible Stock
                </Text>
                <Text style={{color: '#FFFF', fontSize: 18, fontWeight: '500'}}>
                  135.67 $
                </Text>
                <Text
                  style={{
                    color: '#93E396',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}>
                  In stock
                </Text>
              </View>
             
            </View>
          </TouchableOpacity>
       
          <TouchableOpacity style={styles.cartitem}>
            <View style={styles.leftbox}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                  resizeMode: 'stretch',
                }}
                source={require('../assests/M16A4.jpg')}
              />
            </View>
            <View style={styles.rightbox}>
              <View style={styles.righttop}>
                <Text
                  style={{
                    color: '#C5C5C5',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingBottom: 5,
                  }}>
                  M16A4 Machine Caliper
                </Text>
                <Text style={{color: '#FFFF', fontSize: 18, fontWeight: '500'}}>
                  674.36 $
                </Text>
                <Text
                  style={{
                    color: '#93E396',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}>
                  In stock
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.bottombox}>
        <View style={{display:"flex",flexDirection:"column"}}>
      <Text style={{color:"#FFFF",opacity:0.9,fontSize:16,fontWeight:"400"}}>Total Amount</Text>
        <Text style={{color:"#93E396",opacity:0.9,fontSize:17,fontWeight:"600"}}>810.03 $</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:"#E7B539",padding:8,borderRadius:4}} onPress={() => navigation.navigate('Payment')}><Text style={{color:"white",fontWeight:'500',padding:2}}>Pay Now</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    bottombox: {
        display:"flex",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        width:"100%",
        position:"absolute",
        bottom:0,
        padding:12,
        backgroundColor:"#2A2A2A",
        opacity:0.7
    },
    mainbody: {
      display: 'flex',
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
    },
    topbox: {
      display: 'flex',
      flexDirection: 'column',
      top: 0,
      rowGap: 8,
      justifyContent: 'flex-start',
      paddingStart: 28,
      paddingEnd: 28,
      marginTop: 35,
      marginBottom: 3,
    },
    logo: {
      paddingLeft: 37,
      paddingRight: 37,
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#2A2A2A',
      borderWidth: 1.5,
      borderColor: '#464646',
      borderRadius: 18,
      height: 140,
      marginBottom: 20,
      zIndex: 1,
    },
    imagecont: {
      width: 90,
      height: 83,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: '#464646',
      //marginRight:"auto",
      marginLeft: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textcont: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 30,
      flexWrap: 'wrap',
      //  marginRight:125,
    },
    img: {
      position: 'absolute',
      width: 91,
      height: 69,
      borderRadius: 15,
    },
    titlebar: {
      color: '#818181',
      fontSize: 19,
      paddingBottom: 5,
    },
    subTitlebar: {
      color: '#6B6B6B',
      display: 'flex',
      width: '90%',
      fontSize: 15,
      //flexWrap:"wrap",
    },
    subbody: {
      width: '100%',
      height: '100%',
      //marginTop:20,
      padding: 25,
    },
    input: {
      width: '100%',
      backgroundColor: '#2B2A2A',
      padding: 20,
      borderRadius: 10,
      fontSize: 16,
      paddingLeft: 60,
    },
    icon: {
      position: 'absolute',
      marginTop: 25,
      marginLeft: 20,
    },
    searchbox: {
      display: 'flex',
      flexDirection: 'row',
    },
    cartitem: {
      backgroundColor: '#242424',
      opacity: 0.6,
      width: '100%',
      height: 105,
      borderRadius: 10,
      marginBottom: 15,
      display: 'flex',
      flexDirection: 'row',
    },
    cartbody: {
      marginTop: 0,
    },
    leftbox: {
      width: '37%',
    },
    righttop: {
      padding: 10,
    },
    address:{
        display:'flex',
        flexDirection:"column",
        width:"100%",
        backgroundColor:"#2A2A2A",
        padding:10,
        borderRadius:5,
        marginTop:5
    }
  });
  