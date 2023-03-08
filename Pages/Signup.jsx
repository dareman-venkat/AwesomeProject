import { View, Text , ImageBackground,ScrollView ,StyleSheet,Image,TextInput,TouchableOpacity,KeyboardAvoidingView ,Platform,Dimensions,ToastAndroid} from 'react-native'
import React,{useState} from 'react'

export default function Signup({navigation}) {

  const [username,setUsername]=useState("");
 const [password,setPassword]=useState("");
 const [cnfrmpassword,setcnfrmPassword]=useState("");
 const[userstatus,setuserstatus]=useState(false);
 const[passwordstatus,setpassstatus]=useState(false);
 const[cnfrmpasswordstatus,setcnfrmpassstatus]=useState(false);



const error = [
  { id: 1, message: "Username must not be shorter than 4 charcters"},
  { id: 2, message: "Password must not be shorter than 6 charcters"},
  { id: 3, message: "Confirm Password must be same as Password"},
];

const onSubmit = ()=>{
 
  if (username.length < 4 || password.length <  6 || cnfrmpasswordstatus.length < 6 )
  {
     setuserstatus(true);
     setpassstatus(true);
     setcnfrmpassstatus(true);
     
  }  
  else if (username && password != null){
    setUsername("");
    setPassword("");
    setuserstatus(false);
    setpassstatus(false);
    setcnfrmpassstatus(false);
    navigation.navigate("Login");
    ToastAndroid.showWithGravity('Signed Up Sucessfully',
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM
    )
  } 
}
  
  return (
 <KeyboardAvoidingView style={styles.keyboard} enabled  >
  
  <ImageBackground source={require('../assests/original.png')} style={styles.maincont}>
    <ScrollView style={styles.scroll}> 
      <View style={styles.logo} >
             <Image style={{width:100,height:60}} source={require("../assests/logo.png")} />
          </View>
      <View style={styles.wholecont}>
          <View style={styles.innercont}>
          <View style={styles.inpbox}>
             <TextInput style={styles.inputbox} placeholder=' Username ' placeholderTextColor="#5B5B5B" backgroundColor="#2B2A2A" onChangeText={newText => setUsername(newText)} value={username}  />
             <Text style={userstatus?{color:"#E7B539",position:"relative",padding:10}:{display:"none"}}>{userstatus?error[0].message:""}</Text>
             </View>
             <View style={styles.inpbox}>
             <TextInput style={styles.inputbox} placeholder=' Password ' placeholderTextColor="#5B5B5B" backgroundColor="#2B2A2A" onChangeText={newText => setPassword(newText)} value={password}  />
             <Text style={passwordstatus?{color:"#E7B539",padding:10}:{display:"none"}}>{passwordstatus?error[1].message:""}</Text>
             </View>
             <View style={styles.inpbox}>
             <TextInput style={styles.inputbox} placeholder=' Confirm Password ' placeholderTextColor="#5B5B5B" backgroundColor="#2B2A2A" onChangeText={newText => setcnfrmpassstatus(newText)} value={cnfrmpasswordstatus}  />
             <Text style={passwordstatus?{color:"#E7B539",padding:10}:{display:"none"}}>{passwordstatus?error[2].message:""}</Text>
             </View>
          </View>
          <View style={{alignItems:"center",justifyContent:"center",marginTop:60,marginBottom:30}}>
             <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                 <Text style={{color:"white",fontSize:16,fontWeight:"600"}}>Signup</Text> 
             </TouchableOpacity>
         </View>        
      </View>
      <View style={styles.bottomBox}>  
      <Text style={styles.dont}>Already have an account?</Text>
      <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate("Login")}>
                 <Text style={{color:"#AFAFAF",fontSize:14,fontWeight:"400",textDecorationLine:"underline",textDecorationColor:"#5B5B5B"}}>Login</Text> 
      </TouchableOpacity>
      </View> 
      </ScrollView>
    </ImageBackground>
    
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  
  keyboard:{
   //width: Dimensions.get('window').width,
   //height: Dimensions.get('screen').height,
   //paddingvertical:20
  },
  inpbox:{
    marginBottom:12,
  },
  scroll:{
    width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,
  }
  ,
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
     padding:20,
     
     borderRadius:15,
     borderColor:"#464646",
     borderWidth:1.5,
     fontSize:15,
     fontFamily:"SFUIDisplay"
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
        marginBottom:50
    }
  



})