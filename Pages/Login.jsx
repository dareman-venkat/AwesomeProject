import { View, Text , ImageBackground, StyleSheet,Image,TextInput,TouchableOpacity,Pressable,KeyboardAvoidingView,Dimensions,ScrollView,ToastAndroid} from 'react-native'
import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../AuthProvider';

import axios from 'axios';

export default function Login({navigation}) {
 //const {setIsLoggedin} = useContext(AuthContext);


const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const[userstatus,setuserstatus]=useState(false);
const[passwordstatus,setpassstatus]=useState(false);


const error = [
  { id: 1, message: "BG checks" },
  { id: 2, message: "Email must not be shorter than 4 charcters" },
  { id: 3, message: "Password must not be shorter than 6 charcters" },
];
const baseUrl = "http://192.168.1.127:5000";

const onSubmit = ()=>{

 
  if (username.length < 4 || password.length <  6 )
  {
     setuserstatus(true);
     setpassstatus(true);
     
  }  
  else if (username && password ){
    // setUsername("");
    // setPassword("");
    setuserstatus(true);
     setpassstatus(false);
     const params = {
      "email":username,
      "password":password
     } 
     axios.post(`${baseUrl}/CustomerDetails/login`,params)
     .then( async (res) => {
       console.log("response",res.data)
        
       console.log("hi",res.data)
       if (res.data.accesstoken){
       await AsyncStorage.setItem('token',res.data.accesstoken)
        navigation.navigate("Mainpage")
        ToastAndroid.showWithGravity('Logged in Sucessfully',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
        )
      
      }
        
       else{
        ToastAndroid.showWithGravity('Invalid Credentials ',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
        )
       }
       //setIsLoggedin(true)
     }).catch((error)=>{console.log("this is error",error)})
     ;
    
    
    
  } 
}
console.log("check",userstatus)

const cleanstorage = async()=>{
  await AsyncStorage.removeItem('token');
  console.log("cleared")
  const tokn = await AsyncStorage.getItem('token')
  console.log("This is tokern ++>>" ,tokn);

}




  return (
<KeyboardAvoidingView style={styles.keyboard} >
    <ImageBackground source={require('../assests/original.png')} style={styles.maincont} >
    <ScrollView style={styles.scroll}> 
      <View style={styles.logo} >
             <Image style={{width:100,height:60}} source={require("../assests/logo.png")} />
          </View>
      <View style={styles.wholecont}>
          <View style={styles.innercont}>
            <View style={styles.inpbox}>
             <TextInput style={styles.inputbox} placeholder=' Email ' placeholderTextColor="#5B5B5B" backgroundColor="#2B2A2A" onChangeText={newText => setUsername(newText)} value={username}  />
             <Text style={userstatus?{color:"#E7B539",position:"relative",padding:10}:{display:"none"}}>{userstatus?error[1].message:""}</Text>
             </View>
             <View style={styles.inpbox}>
             <TextInput style={styles.inputbox} placeholder=' Password ' placeholderTextColor="#5B5B5B" backgroundColor="#2B2A2A" onChangeText={newText => setPassword(newText)} value={password}  />
             <Text style={passwordstatus?{color:"#E7B539",padding:10}:{display:"none"}}>{passwordstatus?error[2].message:""}</Text>
             </View>
          </View>
          <View style={{alignItems:"center",justifyContent:"center",marginTop:60,marginBottom:60}}>
             <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                 <Text style={{color:"white",fontSize:16,fontWeight:"600"}}>Login</Text> 
             </TouchableOpacity>
         </View>        
      </View>
      
      <View style={styles.bottomBox}>  
      <Text style={styles.dont}>Dont have an account?</Text>
      <TouchableOpacity style={styles.signup} onPress={cleanstorage}>
                 <Text style={{color:"#AFAFAF",fontSize:14,fontWeight:"400",textDecorationLine:"underline"}}>Sign up now</Text> 
      </TouchableOpacity>
      </View> 
      </ScrollView> 
    </ImageBackground>
    </KeyboardAvoidingView>
   
  )
}

const styles = StyleSheet.create({
  scroll:{
    width: Dimensions.get('window').width,
   height: "100%",
  },
  keyboard:{
    //width: Dimensions.get('window').width,
    height: "100%",
    //paddingHorizontal:20,
   },

    maincont:{
       width:"100%",
       height:"100%",
       backgroundColor:"#000000"
    },
    logo:{
        marginTop:30,
        justifyContent:"center",
        alignItems:"center",
        
      
    },
    wholecont:{
      padding:20,
      display:"flex",
      flexDirection:"column",
      flex:1,
    },
    inputbox:{
     color:"#5B5B5B",
     padding:20,
   
     borderRadius:15,
     borderColor:"#464646",
     borderWidth:1.5,
     fontSize:15,
     fontFamily:"SFUIDisplay"
    },

    inpbox:{
      marginBottom:12,
    },
    innercont:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-around",
      marginTop:40,
    },
    btn:{
        backgroundColor: "#E7B539",
        alignItems:"center",
        justifyContent:"center",
        padding:18,
        width:"100%",
        borderRadius:10
    },
    dont:{
        color:"#7D7D7D",
    },
    bottomBox:{
        bottom:0,
        alignItems:"center",
        
       
        
    }
  



})