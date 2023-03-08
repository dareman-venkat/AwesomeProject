import { View, Text ,Image ,StyleSheet,Button, Pressable,ScrollView,ImageBackground} from 'react-native'
import React from 'react'
const Home = () => {

  return (
    <ImageBackground source={require('../assests/original.png')} style={styles.mainbody}>
      <ScrollView style={styles.subbody}>
      <View style={styles.card}>
          <View style={styles.imagecont}>
            <Image style={styles.img} source={require("../assests/Akila.jpg")} />
          </View>
           <View style={styles.textcont} >
             <Text style={styles.titlebar}>Jeff Collins</Text>
             <Text style={styles.subTitlebar}>Approved</Text>
           </View>
         </View>
         <View style={styles.card}>
          <View style={styles.imagecont}>
            <Image style={styles.img} source={require("../assests/Akila.jpg")} />
          </View>
           <View style={styles.textcont} >
             <Text style={styles.titlebar}>Andrew Garfield</Text>
             <Text style={styles.subTitlebarreject}>Delayed / Hold</Text>
           </View>
         </View>
         </ScrollView>
         <Pressable style={styles.button} > 
           <Text style={styles.text}>Press me</Text>
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
  titlebar:{
    color:"#828282",
    fontSize:19,
    paddingBottom:5
    //fontWeight:500,
  },
  subTitlebar:{
    color:"#93E396",
    display:"flex",
    width:"90%",
    fontSize:15,
    //flexWrap:"wrap",
    //fontWeight:350,
  },
  subTitlebarreject:{
    color:"#E7B539",
    display:"flex",
    width:"90%",
    fontSize:15,
  },
  imagecont:{
    width:70,
    height:63,
    borderRadius:15,
    borderWidth:2,
    borderColor:"white",
    //marginRight:"auto",
    marginLeft:15,
    alignItems:"center",
    justifyContent:"center"
  },

  textcont:{
   display:"flex",
   width:"100%",
   flexDirection:"column",
   justifyContent:"center",
   marginLeft:30,
   flexWrap:"wrap",
  //  marginRight:125,
  },

  img:{
   position:"absolute",
   width:61,
    height:54,
    borderRadius:15
  },
  subbody:{
    width:"100%",
    height:"100%",
    marginTop:20,
    padding:20
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
    marginBottom:30,
    bottom:0
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  bigcard:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2A2A2A",
    borderRadius:20
  },
  profilcard:{
    display:"flex",
    flexDirection:"row", 
    justifyContent:"space-evenly",
    width:"100%"
  },
  imagecontt:{
    width:"30%",
    height:63,
    borderRadius:15,
    borderWidth:2,
    borderColor:"white",
    marginLeft:20,
    alignItems:"center",
    justifyContent:"center"
  },
  
  imgg:{
    position:"absolute",
    width:"100%",
     height:54,
     borderRadius:15
  },
  textcontt:{
    display:"flex",
    width:"70%",
    flexDirection:"column",
    justifyContent:"center",
    marginLeft:30,
    flexWrap:"wrap",
   //  marginRight:125,
   },

});

export default Home