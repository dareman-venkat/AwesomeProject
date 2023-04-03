import {  View,
    Text,
    Image,
    StyleSheet,
    Button,
    Pressable,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    TextInput 
} from 'react-native'
import React from 'react'
import {LinearTextGradient} from 'react-native-text-gradient';

export default function Carddetails({navigation}) {
  return (
    <ImageBackground
      source={require('../assests/original.png')}
      style={styles.mainbody}>
      <View style={styles.topbox}>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
          <Image source={require('../assests/back.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.upbox}>
        <Text style={{color:"#7C828A",fontSize:20,fontWeight:"350",marginBottom:10}}>Card Info</Text>
        <TextInput
        style={styles.inputbox}
        placeholder="Card Number"
        placeholderTextColor={"#5B5B5B"}
        />
        <View style={{display:'flex',flexDirection:"row",alignItems:'center',justifyContent:"flex-start",marginTop:3}}>
        <TextInput
        style={styles.inputboxhalf}
        placeholder="Exp Date"
        placeholderTextColor={"#5B5B5B"}
        />
        <TextInput
        style={styles.inputboxhalf}
        placeholder="CCV"
        placeholderTextColor={"#5B5B5B"}
        />
        </View>
      </View>
      <View style={styles.upbox}>
        <Text style={{color:"#7C828A",fontSize:20,fontWeight:"350",marginBottom:10}}>Billing Info</Text>
        <TextInput
        style={styles.inputbox}
        placeholder="Card Holder Name"
        placeholderTextColor={"#5B5B5B"}
        />
         <TextInput
        style={styles.inputbox}
        placeholder="Address"
        placeholderTextColor={"#5B5B5B"}
        />
         <TextInput
        style={styles.inputbox}
        placeholder="City"
        placeholderTextColor={"#5B5B5B"}
        />
        <View style={{display:'flex',flexDirection:"row",alignItems:'center',justifyContent:"flex-start",marginTop:3}}>
        <TextInput
        style={styles.inputboxhalf}
        placeholder=" State"
        placeholderTextColor={"#5B5B5B"}
        />
        <TextInput
        style={styles.inputboxhalf}
        placeholder="Zipcode"
        placeholderTextColor={"#5B5B5B"}
        />
        </View>
      </View>
      <TouchableOpacity
        onPress={()=>navigation.navigate("Last")}
          style={{
            backgroundColor: '#E7B545',
            padding: 12,
            borderRadius: 8,
            opacity: 0.8,
            marginTop: 8,
            width:"88%",
            alignSelf:"center"
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '600',
              color: '#FFFF',
            }}>
           Next
          </Text>
        </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    upbox:{
     display:"flex",
     flexDirection:"column",
     justifyContent:'flex-start',
     padding:25 ,
    },
    inputbox:{
        backgroundColor:"#242424",
        borderColor:"#403C3C",
        borderWidth:1.3,
        padding:17,  
        marginBottom:12,   
        borderRadius:10
    },
    inputboxhalf:{
        backgroundColor:"#242424",
        borderColor:"#403C3C" ,
        borderWidth:1.3,
        padding:17, 
        borderRadius:10,
        width:"45%",
        margin:0,
        marginRight:33
    },

    bottombox: {
        display:"flex",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        width:"100%",
       
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
      justifyContent: 'flex-start',
      paddingStart: 28,
      paddingEnd: 28,
      marginTop: 35,
      marginBottom: 15,
      
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
  