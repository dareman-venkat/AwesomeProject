import { View, Text , Alert,StyleSheet,Image,ScrollView,Pressable,TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './MainPage';
import Check from '../Pages/Check'
const data = [
  { value: 26, name: "BG checks" },
  { value: 8, name: "Transactions" },
  { value: 72, name: "Followers" },
];

const profile = [
  { state:"List of items in Cart", name: "My Cart" },
  { state:"History of transactions", name: "My Purchases" },
  { state:"Manage your Security options", name: "Security" },
  { state:"Supporting copy here", name: "Notifications" },
  { state:"Make money by refering", name: "Refer a friend " },
  { state:"Logout from your account", name: "Logout" },
];


const About = ({ navigation }) => {
  
  return (
    <View style={styles.mainbody}>
        <ScrollView style={styles.subbody}>
          <TouchableOpacity style={styles.backbox}>
              <TouchableOpacity onPress={() => navigation.navigate("Mainpage")}>
                <Image source={require("../assests/back.png")} />
              </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.profilebox}>
                  <View style={styles.imagecont}>
                    <Image style={styles.img} source={require("../assests/beard.png")} />
                  </View>
                  <Text style={styles.titlebar}>Jeff Beszoz</Text>
                  <Text style={styles.subTitlebar}>Update Photo</Text>
          </View>
          <View style={styles.gridbx}>
          {data.map((user) => (
          <View style={styles.fbox} >
         <Text style={styles.titlebar1}>{user.name}</Text>
         <Text style={styles.titlebar2}>{user.value}</Text>
         </View>
                   ))}
          </View>
         <View>
          <Text style={styles.parabar}>User bio text goes here User bio  bio text goes here User bio text goes here User bio text goes here User bio text goes here User bio text goes here User bio text goes here User bio text goes here User bio text goes here</Text>
         </View>
         {profile.map((prop) => (
         <TouchableOpacity style={styles.card} onPress={() =>{ prop.name == "Logout" ?(navigation.navigate("Login")):(prop.name == "My Cart"?(navigation.navigate("Cart")):null)}} >
          <View style={styles.imagecont2}>
          <Image style={{width:"100%",height:"100%"}}
                 source={{ uri:`https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg`}}
                  />
          </View>
           <View style={styles.textcont2} >
             <Text style={styles.titlebar2}>{prop.name}</Text>
             <Text style={styles.subTitlebar2}>{prop.state}</Text>
           </View>
         </TouchableOpacity>
         ))}
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  mainbody:{
    display:"flex",
    flex:1,
    backgroundColor:'#222222',
    height:'100%',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  subbody:{
    width:"100%",
    height:"100%",
    marginTop:20,
    padding:20,
    marginBottom:10
  },
  backbox:{
    display:"flex",
    width:"100%",
    justifyContent:"flex-start",
    paddingLeft:8,
    height:180,
    zIndex:1
  },
  profilebox:{
    display:"flex",
    flexDirection:"column",
    width:"100%",
    height:180,
    position:"absolute",
    alignItems:"center",
    
  },
  imagecont:{
    width:100,
    height:100,
    borderRadius:47,
    borderWidth:3,
    borderColor:"#E7B539",
    //marginRight:"auto",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10
  },
  img:{
    position:"absolute",
    width:86,
     height:86,
     borderRadius: 35
   },
   titlebar:{
       color:"#B9B9B9",
       fontSize:19,
       paddingBottom:10,
       fontWeight:600
   },
   titlebar1:{
    color:"#B9B9B9",
    fontSize:18,
    padding:10,
    fontWeight:700
   },
   titlebar2:{
    color:"#828282",
    fontSize:16,
    padding:3,
    fontWeight:500
   },
   subTitlebar:{
        color:"#828282",
       fontSize:14
   },
   gridbx:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
   }
   ,
   fbox:{
    display:'flex',
    flexDirection:"column",
    alignItems:"center",
    justifyContent:'center'
   },
   parabar:{
    color:"#828282",
    fontFamily:"SF UI Display",
    margin:11,
    fontSize:16,
    marginBottom:35
   },
   card:{
    display:'flex',
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:"#2A2A2A",
    borderWidth:2,
    borderColor:"#464646",
    borderRadius:18,
    height:90,
    marginBottom:20
  },
  imagecont2:{
    width:70,
    height:63,
    borderRadius:55,
    //borderColor:"white",
    //marginRight:"auto",
    marginLeft:15,
    alignItems:"center",
    justifyContent:"center"
  },

  textcont2:{
   display:"flex",
   width:"100%",
   flexDirection:"column",
   justifyContent:"center",
   marginLeft:30,
   flexWrap:"wrap",
  //  marginRight:125,
  },
  img2:{
   position:"absolute",
   width:61,
    height:55,
    borderRadius:30
  },
  titlebar2:{
    color:"#828282",
    fontSize:19,
    paddingBottom:5
    //fontWeight:500,
  },
  subTitlebar2:{
    color:"#8A8A8A",
    display:"flex",
    width:"90%",
    fontSize:15,
    fontWeight:350

    //flexWrap:"wrap",
    //fontWeight:350,
  },
   
});
export default About


