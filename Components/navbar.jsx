import React from 'react'
import {View, StyleSheet, Text,TouchableOpacity,Image,ImageBackground} from 'react-native'
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import ChatPreview from '../Pages/ChatPreview';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import About from '../Pages/About';

const Tab = createMaterialTopTabNavigator();

export default function Navbar({ navigation }) {
  return (
    <ImageBackground source={require('../assests/original.png')} style={{ flex: 1 , backgroundColor:'black'}}>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"}}>
           <TouchableOpacity style={{display:"flex",justifyContent:"center",width:"30%",paddingLeft:30}} onPress={() => navigation.navigate("Mainpage")}>
             <Image source={require("../assests/back.png")} />
           </TouchableOpacity>
          <Text style={styles.text}>Notificaton</Text>
      </View>
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor:'transparent',marginTop:0,borderBottomColor:'#616161',borderLeftColor:"transparent",borderRightColor:"transparent",borderTopColor:"transparent",borderWidth:1.5,marginLeft:18,marginRight:18,marginBottom:15,shadowColor:'transparent'},
      tabBarContentContainerStyle:{borderBottomColor:'white',paddingBottom:5},
      tabBarIndicatorStyle: {backgroundColor:"#C1B9B9",marginBottom:10,width:35,marginLeft:32},
      tabBarIndicatorContainerStyle:{alignContent:"space-around"},
      tabBarLabelStyle: { color:"#C1B9B9",fontSize: 14,width:"100%",padding:5},
    }}
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Profile" component={About}/>
      <Tab.Screen name="Chat" component={ChatPreview}/>
      <Tab.Screen name="Offers" component={Profile}/>
    </Tab.Navigator>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  navbar:{
    paddingTop:10,
    color:'white',
    paddingBottom:25
  },
  text:{
    color:"#B9B9B9",
    fontSize:18,
    padding:35,
    fontWeight:"bold",
    width:"70%",
  }
});




// export default function Navbar(){
//   return(
//     <NavigationContainer>
//     <Navtg/>
//     </NavigationContainer>
//   )
// }