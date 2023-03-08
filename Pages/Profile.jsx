import { View, Text , StyleSheet,Image,ScrollView,Pressable,ImageBackground } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Check from '../Pages/Check'

const Profile = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assests/original.png')} style={styles.mainbody}>
        <ScrollView style={styles.subbody}>
          <View style={styles.cardbody} onStartShouldSetResponder={()=>navigation.navigate('Home')}>
            <View style={styles.coverbox}>
           <View style={styles.upbox}>
              <View style={styles.imagecont}>
                <Image style={styles.img} source={require("../assests/Gun.jpg")} />
              </View>
              <View style={styles.textbar}>
               <Text style={styles.titlebar}>New Offer ipsum dolor sit amet</Text>
               <Text style={styles.subTitlebar}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </Text>
              </View>
           </View>
           </View>
           <View style={styles.downbox}>
           <Text style={styles.txt} >Save</Text>
           <Text  style={styles.txt}>|</Text>
               <Text  style={styles.txt} >Share</Text> 
           </View>
          </View>
          <View style={styles.cardbody} onStartShouldSetResponder={()=>navigation.navigate('Home')}>
            <View style={styles.coverbox}>
           <View style={styles.upbox}>
              <View style={styles.imagecont}>
                <Image style={styles.img} source={require("../assests/Soldier.jpg")} />
              </View>
              <View style={styles.textbar}>
               <Text style={styles.titlebar}>New Offer ipsum dolor sit amet</Text>
               <Text style={styles.subTitlebar}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam </Text>
              </View>
           </View>
           </View>
           <View style={styles.downbox}>
           <Text style={styles.txt} >Save</Text>
           <Text  style={styles.txt}>|</Text>
               <Text  style={styles.txt} >Share</Text> 
           </View>
          </View>
        </ScrollView>
        <Pressable style={styles.button} > 
           <Text style={styles.texts}>Next</Text>
         </Pressable>
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
    marginTop:0,
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
      marginBottom:15
      
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
    borderBottomLeftRadius:15
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
    fontWeight:600,
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
    marginBottom:12
  },
  texts:{
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color:'white',
  }
   
});
export default Profile