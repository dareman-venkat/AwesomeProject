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

export default function Payment({navigation}) {
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
          <Text style={{width: '100%'}}>Review & Pay</Text>
        </LinearTextGradient>
        <View style={styles.address}>
        <View style={styles.imagecont}>
              <Image style={styles.img} source={require("../assests/beard.png")}/> 
            </View>
        <Text style={{color:"#C5C5C5",opacity:0.7,fontSize:16,padding:5}}>Adam Collins</Text>
        <Text style={{color:"#C5C5C5",opacity:0.5,fontSize:24,padding:0}}>State & Fedral</Text>
        <Text style={{color:"#C5C5C5",opacity:0.7,fontSize:26,paddingBottom:20}}>Background Check</Text>
        </View>
      </View>
      <View style={styles.bottombox}>
       
            <View style={{width:"100%",padding:10,height:"100%"}}>
            <TouchableOpacity style={styles.innercard} onPress={()=> navigation.navigate('Carddetails')}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                 <Image source={require("../assests/debitcard.png")}/>
                 <View style={{display:"flex",flexDirection:"column",padding:5,justifyContent:"space-evenly"}}>
                    <Text style={{color:"#818181",fontSize:18,fontWeight:"700"}}>Debit or Credit Card</Text>
                    <Text style={{color:"#6B6B6B",fontSize:16}}>Instant Deposit</Text>
                 </View>
                </View>
                <View>
                <Image source={require("../assests/Vector.png")} style={{marginRight:5}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.innercard}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                 <Image source={require("../assests/applepay.png")}/>
                 <View style={{display:"flex",flexDirection:"column",padding:5,justifyContent:"space-evenly"}}>
                    <Text style={{color:"#818181",fontSize:18,fontWeight:"700"}}>Apple Pay</Text>
                    <Text style={{color:"#6B6B6B",fontSize:16}}>Instant Deposit</Text>
                 </View>
                </View>
                <View>
                <Image source={require("../assests/Vector.png")} style={{marginRight:5}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.innercard}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                 <Image source={require("../assests/Bank.png")}/>
                 <View style={{display:"flex",flexDirection:"column",padding:5,justifyContent:"space-evenly"}}>
                    <Text style={{color:"#818181",fontSize:18,fontWeight:"700"}}>Bank Account</Text>
                    <Text style={{color:"#6B6B6B",fontSize:16}}>Instant Deposit</Text>
                 </View>
                </View>
                <View>
                <Image source={require("../assests/Vector.png")} style={{marginRight:5}}/>
                </View>
            </TouchableOpacity>
            </View>
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
        opacity:0.7,
        height:300,
        borderRadius:30,
       
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
        width: 100,
        height: 100,
        borderRadius: 47,
        borderWidth: 3,
        borderColor: '#E7B539',
        //marginRight:"auto",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop:5
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
        width: 86,
        height: 86,
        borderRadius: 35,
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
        borderRadius:15,
        marginTop:20,
        alignItems:"center",
        borderColor:"#3F3F3F",
        borderWidth:2
    },
    innercard:{
        borderColor:"#3E3E3E",
        borderWidth:2,
        width:"100%",
        padding:9,
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#242424",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:10,
        marginBottom:5
    }
  });
  