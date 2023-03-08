import { View, Text ,Image ,StyleSheet,Button, Pressable,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import React , { useState } from 'react'

export default function Chatpage({ navigation }) {

  const data = [
    { value: 26, name: "BG checks" },
    { value: 8, name: "Transactions" },
    { value: 72, name: "Followers" },
  ];
  const[submit,setSubmit]=useState("");
  
  handleEmail = (e) => {
    setSubmit(e);
      console.log("-->",e)
    }

  return (
    <View style={styles.mainContainer}>
        <View style={styles.headContainer}>   
           <TouchableOpacity style={{display:"flex",justifyContent:"center",paddingLeft:30,paddingRight:30}} onPress={() => navigation.navigate("Navbar")}>
             <Image source={require("../assests/back.png")} />
           </TouchableOpacity>
           <Image source={require("../assests/Akila.jpg")} style={{borderRadius:45,width:40,height:40}} />
           <Text style={styles.titlebar}>Akila Murgesan</Text>
           <TouchableOpacity style={{display:"flex",justifyContent:"center",paddingLeft:30,paddingRight:30,marginLeft:"auto"}} onPress={() => navigation.navigate("Navbar")}>
             <Image source={require("../assests/more1.png")}/>
           </TouchableOpacity>
        </View>
        <ScrollView style={styles.chatbody}>
        <View style={styles.message}>
          <Text style={{color:"#CECECE",fontSize:16,padding:2,lineHeight:20}}>
            Hi man , please let me know when will be the M16 avialble
          </Text>
        </View>
        <View style={styles.messageclient}>
          <Text style={{color:"white",fontSize:16,padding:2,lineHeight:20,fontWeight:"400"}}>
            Hi brother , M16 is Currently avialble 
          </Text>
        </View>
        </ScrollView>
        <View style={{justifyContent:"center"}}>
        <TextInput style={styles.searchbar} placeholder=' Message ' placeholderTextColor="#5B5B5B" value={submit} onChangeText={(text)=>handleEmail(text)}/>
        <TouchableOpacity style={styles.btn} onPress={()=>{setSubmit(" ")}}> 
        <Image source={require("../assests/send.png")} style={{width:30,height:30,alignItems:"center",justifyContent:"center"}}/>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
      display:"flex",
      flexDirection:"column",
      backgroundColor:'#222222',
      height:"100%",
    },
    headContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    width:"100%",
    height:70,
    backgroundColor:'rgba(42, 42, 42, 0.9)',
    zIndex:1
    },

    titlebar:{
    paddingLeft:25,    
    color:"#B9B9B9",
    fontWeight: 'bold',
    fontSize:19
    },
    chatbody:{
    backgroundColor:'#222222',
    width:"100%",
    height:"100%",
    },
    searchbar:{
      color:"white",
      backgroundColor:"#2B2A2A",
      paddingLeft:15,
      position:"relative",
    },
    message:
    {
      backgroundColor:"#616161",
      color:"white",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 15,
      padding: 10,
      width:"60%",
      margin:10,
      marginLeft:"auto"
    },
    messageclient:{
      backgroundColor:"#D1A026",
      color:"black",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 0,
      padding: 10,
      width:"60%",
      margin:10,
      marginRight:"auto"
    },
    btn:
    {
      position:"absolute",
      right:0,
      paddingRight:20,
    }


    
  })