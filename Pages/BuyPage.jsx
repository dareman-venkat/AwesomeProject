import { View, Text , StyleSheet,Image,ScrollView,Pressable,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Check from './Check'
import axios from 'axios';
import { useEffect } from 'react';

const BuyPage = ({ navigation }) => {
  const baseUrl = "http://192.168.1.127:5000";
  
  const [data ,setData] = useState([]);

useEffect(()=>{
  axios.get(`${baseUrl}/gunCollection/showall`)
  .then((response) => {
    console.log("response",response)
    setData(response.data)
    console.log("hi",data)
  }).catch((error)=>{console.log("this is error",error)})
  ;


},[])

console.log("hi",data)

  return (
    <ImageBackground source={require('../assests/original.png')} style={styles.mainbody} >
       <View style={{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"}}>
           <TouchableOpacity style={{display:"flex",justifyContent:"center",width:"20%",paddingLeft:30}} onPress={() => navigation.navigate("Mainpage")}>
             <Image source={require("../assests/back.png")} />
           </TouchableOpacity>
          <Text style={styles.text}>Our Products</Text>
      </View>
        <ScrollView style={styles.subbody}>
        {data.map((gun) => (
          <View style={styles.cardbody} >
            <View style={styles.coverbox}>
           <View style={styles.upbox}>
              <View style={styles.imagecont}>
                <Image style={styles.img}
                 source={{ uri:`${gun.gunimgurl}`}}
                  />
              </View>
              <View style={styles.textbar}>
               <Text style={styles.titlebar}>{gun.gunModelName}</Text>
               <Text style={styles.subTitlebar}>{gun.gunRentalAmount}</Text>
              </View>
           </View>
           </View>
           <View style={styles.downbox}>
           <Text style={styles.txt} >Buy</Text>
           <Text  style={styles.txt}>|</Text>
               <Text  style={styles.txt} >Add to Cart</Text> 
           </View>
          </View>
          ))}
        </ScrollView>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  mainbody:{
    display:"flex",
    flex:1,
    backgroundColor:'black',
    height:'100%',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  subbody:{
    width:"100%",
    height:"100%",
    marginTop:20,
    padding:20
  },
  textbar:{
    color:"white",
    paddingTop:20
  },
  cardbody:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"space-between",
      backgroundColor:"#2A2A2A",
      width:"100%",
      height:230,
      backgroundColor:"#2A2A2A",
      borderWidth:2,
      borderColor:"#464646",
      borderRadius:18,
      marginBottom:20
      
  },
  coverbox:{
    padding:10,
    paddingTop:15
  },
  imagecont:{
    width:"40%",
    height:"100%",
    //marginRight:"auto",
    alignItems:"center",
    justifyContent:"center",
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15
    
  },
  
  img:{
    position:"absolute",
    width:"100%",
    height:"100%",
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
    resizeMode:"cover"
   },
   upbox:{
    display:"flex",
    flexDirection:"row",
    width:"100%",
    height:150,
    alignItems:"center",
    justifyContent:"flex-start",
    backgroundColor:'#212121',
    borderRadius:15
   },
   subTitlebar:{
    color:"#5B5B5B",
    fontSize:15,
    width:200,
    flexWrap:"wrap",
    padding:20,
    paddingTop:5
   },
   titlebar:{
    color:"#828282",
    width:200,
    flexWrap:"wrap",
    fontSize:18,
    //fontWeight:600,
    paddingLeft:20,
   },
   downbox:{
   display:"flex",
   flexDirection:"row",
   height:48,
   width:"100%",
   alignItems:"center",
   justifyContent:"space-evenly",
   backgroundColor:"#202020",
   borderBottomLeftRadius: 20,
   borderBottomRightRadius:20,
   } ,
   txt:{
    color:"#5B5B5B",
    fontSize:15
   },
   button: {
    position:'absolute',
    width:"80%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#E7B539',
    bottom:0,
  },
  texts:{
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color:'white',
  },
  text:{
    color:"#B9B9B9",
    fontSize:20,
    padding:35,
    fontWeight:"bold",
    width:"100%",
    justifyContent:"flex-start",
    marginLeft:28
    
  }
   
});
export default BuyPage