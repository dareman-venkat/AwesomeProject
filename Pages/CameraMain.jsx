import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import { Svg,Defs,Rect,Mask } from 'react-native-svg';
import { useState } from 'react';
const CameraMain = ({navigation}) => {

const[open,setopen]=useState(false);

  React.useEffect(() => {
    requestCameraPermission();
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;

  const requestCameraPermission = React.useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if ((permission = 'denied')) await Linking.openSettings();
  }, []);

  function renderCamera() {
    if (device != null ) {
      return (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}>
          <Camera
            style={{
              flex: 1,
            }}
            device={device}
            photo={true}
            isActive={true}
            enableZoomGesture
          />
          {Cameraoverlay()}
        </View>
      );
    } 
    else {
      return (

<View
style={{
  flex: 1,
}}
/>
      );
    }
  }

  function Cameraframe() {
   
    return(

         <Svg
         width="100%"
         height="100%"
         >
             <Defs>
                  <Mask
                   id="mask"
                   x="0"
                   y="0"
                   height="100%"
                   width="100%"
                   >
                      <Rect height="100%" width="100%" fill="#fff" />
                      <Rect
                      x="18%"
                      y="20%"
                      width="250"
                      height="250"
                      fill="black"
                      />
                  </Mask>
             </Defs>
             <Rect
               height="100%"
               width="100%"
               fill="rgba(0,0,0,0.8)"
               mask="url(#mask)"
             />
             <Rect
              x="18%"
              y="20%"
              width="250"
              height="250"
              strokeWidth="5"
              stroke="#fff"
              fill="rgba(0,0,0,0.2)"
             />
         </Svg>
    )
  }

  function Cameraoverlay(){

return(


  <View
      style={{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
      }}
      >
    <Cameraframe/>
  </View>
)

  }

  return (
    <ImageBackground
      source={require('../assests/original.png')}
      style={styles.mainbody}>
      <View style={styles.subbody}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('BuyPage')}>
          <View style={styles.imagecont}>
            <Image style={styles.img} source={require('../assests/buy.png')} />
          </View>
          <View style={styles.textcont}>
            <Text style={styles.titlebar}>Add your Product</Text>
            <Text style={styles.subTitlebar}>Scan to add product</Text>
          </View>
        </TouchableOpacity>
        {renderCamera()}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  mainbody: {
    display: 'flex',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
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
    width: 90,
    height: 83,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#464646',
    //marginRight:"auto",
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 91,
    height: 69,
    borderRadius: 15,
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
    justifyContent: 'center',
  },
});

export default CameraMain;
