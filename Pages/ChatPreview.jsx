import { View, Text ,Image ,StyleSheet,Button, Pressable,ScrollView,TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
const ChatPreview = ({ navigation }) => {

    const messages = [
        {
        id:1,
        message:"hi this is venkat iam looking for Ar gun",
        status:"seen"
       },
       {
        id:2,
        message:"is gun clock still available",
        status:"unseen"
       }
]
  return (
    <ImageBackground source={require('../assests/original.png')} style={styles.mainbody}>
      <ScrollView style={styles.subbody}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Chatpage")}>
          <View style={styles.imagecont}>
            <Image style={styles.img} source={require("../assests/Akila.jpg")} />
          </View>
           <View style={styles.textcont} >
             <Text style={styles.titlebar}>Akila Murgesan</Text>
             <Text style={styles.subTitlebar}>{messages[0].message.length>10? messages[0].message.slice(0,25)+"...":messages[0].message}</Text>
           </View>
           <View style={styles.statusbox}>
            <Image source={require("../assests/Notseen.png")} />
          </View>
         </TouchableOpacity>
         <View style={styles.card}>
          <View style={styles.imagecont}>
            <Image style={styles.img} source={require("../assests/krishna.jpg")} />
          </View>
           <View style={styles.textcont} >
             <Text style={styles.titlebar}>Krishna Kumar</Text>
             <Text style={styles.subTitlebarreject}>{messages[1].message.length>10? messages[1].message.slice(0,25)+"...":messages[1].message}</Text>
           </View>
           <View style={styles.statusbox}>
            <Image source={require("../assests/Seen.png")}/>
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
   
  },
  subTitlebar:{
    color:"#5B5B5B",
    display:"flex",
    width:"90%",
    fontSize:15,
    //flexWrap:"wrap",
    
  },
  subTitlebarreject:{
    color:"#5B5B5B",
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
    justifyContent:"center",
    zIndex:1
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
    justifyContent:"center",
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
   statusbox:{
    marginLeft:"auto",
    alignItems:"center",
    justifyContent:"center",
    paddingRight:23,
    marginTop:"auto",
    paddingBottom:25
   }

});

export default ChatPreview