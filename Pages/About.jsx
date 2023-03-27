import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Svg, Defs, Rect, Mask} from 'react-native-svg';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useState, useRef} from 'react';
import MainPage from './MainPage';
import Check from '../Pages/Check';
const data = [
  {value: 26, name: 'BG checks'},
  {value: 8, name: 'Transactions'},
  {value: 72, name: 'Followers'},
];

const profile = [
  {state: 'List of items in Cart', name: 'My Cart'},
  {state: 'History of transactions', name: 'My Purchases'},
  {state: 'Manage your Security options', name: 'Security'},
  {state: 'Supporting copy here', name: 'Notifications'},
  {state: 'Make money by refering', name: 'Refer a friend '},
  {state: 'Logout from your account', name: 'Logout'},
];

const About = ({navigation}) => {
  //const [{cameraRef},{takePicture}] = useCamera(null);

  const [open, setopen] = useState(false);
  const [imageSource, setImageSource] = useState(
    'file:///storage/emulated/0/Android/data/com.awesomeproject/files',
  );
  let filepath;
  let newfilepath;
  const cleanstorage = ()=>{
    const tokn =  AsyncStorage.getItem('token')
    console.log("this is before token ++++++",tokn)
     AsyncStorage.removeItem('token');
    console.log("cleared")
    console.log("This is tokern ++>>" ,tokn);
    navigation.navigate('Login');
  }

  React.useEffect(() => {
    requestCameraPermission();
  }, [capturephoto]);
  const cameraRef = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const requestCameraPermission = React.useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if ((permission = 'denied')) await Linking.openSettings();
  }, []);

  const capturephoto = async () => {
    console.log('entered ____>>>>');
    if (cameraRef.current !== null) {
      console.log('no issue');
      const photo = await cameraRef.current.takePhoto({
        qualityPrioritization: 'speed',
        quality: 85,
        enableAutoStabilization: true,
        skipMetadata: true,
        photoCodec: 'jpeg',
      });
      //setImageSource(photo.path);
      console.log('Result ____>>>>>>', imageSource);
      filepath = photo.path;
      newfilepath =
        RNFS.ExternalDirectoryPath + `/${Math.random().toString(36)}`;
      setImageSource(newfilepath);
      RNFS.moveFile(filepath, newfilepath);
      console.log('Default--->>', filepath);
      console.log('photo path', newfilepath);
      setopen(false);
    } else {
      console.log('issue');
    }

    console.log('camer worked', photo);
    

    //  try{
    //   const data = await takePicture();
    //   console.log("data",data.uri);
    //   const filepath = data.uri;
    //   const newfilepath = RNFS.ExternalDirectoryPath + '/Test.jpg'
    //   RNFS.moveFile(filepath,newfilepath)
    //      .then( ()=>{
    //         console.log('Image',filepath,"--to--",newfilepath);
    //      })
    //      .catch(error =>{
    //       console.log("error this is ",error)
    //      })
    //  }
    //  catch(err){
    //   console.log("this is err",err)
    //  }
  };

  function renderCamera() {
    if (device != null) {
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
            style={{flex: 1}}
            ref={cameraRef}
            device={device}
            photo={true}
            isActive={true}
            enableZoomGesture
          />
          {/* <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={{flex:1}}
          /> */}
          {Cameraoverlay()}
          <TouchableOpacity onPress={capturephoto} style={styles.capture} />
        </View>
      );
    } else {
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
    return (
      <Svg width="100%" height="100%">
        <Defs>
          <Mask id="mask" x="0" y="0" height="100%" width="100%">
            <Rect height="100%" width="100%" fill="#fff" />
            <Rect x="16%" y="25%" width="250" height="250" fill="black" />
          </Mask>
        </Defs>
        <Rect
          height="100%"
          width="100%"
          fill="rgba(0,0,0,0.7)"
          mask="url(#mask)"
        />
        <Rect
          x="16%"
          y="25%"
          width="250"
          height="250"
          strokeWidth="5"
          stroke="#fff"
          fill="rgba(0,0,0,0.2)"
        />
      </Svg>
    );
  }

  function Cameraoverlay() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <Cameraframe />
      </View>
    );
  }

  return (
    <View style={styles.mainbody}>
      {open && renderCamera()}
      <ScrollView style={styles.subbody}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Mainpage')}
          style={styles.backbox}>
          <Image source={require('../assests/back.png')} />
        </TouchableOpacity>
        <View style={styles.profilebox}>
          <View style={styles.coverbox}>
            <View style={styles.imagecont}>
              {/* <Image style={styles.img} source={require("../assests/beard.png")}/> */}
              <Image
                style={styles.img}
                //key={Math.random().toString(36)}
                source={{uri: `file://${imageSource}`}}
              />
              {/* <Image style={styles.img} source={{uri: imageSource}} /> */}
            </View>
            <TouchableOpacity onPress={() => setopen(true)} style={styles.edit}>
              <Image
                style={{height: 32, width: 32}}
                source={require('../assests/cameraadd.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.titlebar}>Jeff Beszoz</Text>
          <Text style={styles.subTitlebar}>Update Photo</Text>
        </View>
        <View style={styles.gridbx}>
          {data.map(user => (
            <View style={styles.fbox}>
              <Text style={styles.titlebar1}>{user.name}</Text>
              <Text style={styles.titlebar2}>{user.value}</Text>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.parabar}>
            User bio text goes here User bio bio text goes here User bio text
            goes here User bio text goes here User bio text goes here User bio
            text goes here User bio text goes here User bio text goes here User
            bio text goes here
          </Text>
        </View>
        {profile.map(prop => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              prop.name == 'Logout'?
              
               cleanstorage()
                // ? navigation.navigate('Login')
                : prop.name == 'My Cart'
                ? navigation.navigate('Cart')
                : null;
            }}>
            <View style={styles.imagecont2}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{
                  uri: `https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg`,
                }}
              />
            </View>
            <View style={styles.textcont2}>
              <Text style={styles.titlebar2}>{prop.name}</Text>
              <Text style={styles.subTitlebar2}>{prop.state}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainbody: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#222222',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subbody: {
    width: '100%',
    height: '100%',
    marginTop: 20,
    padding: 20,
    marginBottom: 10,
  },
  backbox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    paddingLeft: 8,
    height: 180,
  },
  profilebox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 180,
    position: 'absolute',
    alignItems: 'center',
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
  },
  img: {
    position: 'absolute',
    width: 86,
    height: 86,
    borderRadius: 35,
  },
  titlebar: {
    color: '#B9B9B9',
    fontSize: 19,
    paddingBottom: 10,
    fontWeight: 600,
  },
  titlebar1: {
    color: '#B9B9B9',
    fontSize: 18,
    padding: 10,
    fontWeight: 700,
  },
  titlebar2: {
    color: '#828282',
    fontSize: 16,
    padding: 3,
    fontWeight: 500,
  },
  subTitlebar: {
    color: '#828282',
    fontSize: 14,
  },
  gridbx: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parabar: {
    color: '#828282',
    fontFamily: 'SF UI Display',
    margin: 11,
    fontSize: 16,
    marginBottom: 35,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2A2A2A',
    borderWidth: 2,
    borderColor: '#464646',
    borderRadius: 18,
    height: 90,
    marginBottom: 20,
  },
  imagecont2: {
    width: 70,
    height: 63,
    borderRadius: 55,
    //borderColor:"white",
    //marginRight:"auto",
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textcont2: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 30,
    flexWrap: 'wrap',
    //  marginRight:125,
  },
  img2: {
    position: 'absolute',
    width: 61,
    height: 55,
    borderRadius: 30,
  },
  titlebar2: {
    color: '#828282',
    fontSize: 19,
    paddingBottom: 5,
    //fontWeight:500,
  },
  subTitlebar2: {
    color: '#8A8A8A',
    display: 'flex',
    width: '90%',
    fontSize: 15,
    fontWeight: 350,

    //flexWrap:"wrap",
    //fontWeight:350,
  },
  coverbox: {
    position: 'relative',
  },
  edit: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 15,
    zIndex: 0,
  },
  capture: {
    backgroundColor: '#B9B9B9',
    height: 28,
    width: 28,
    padding: 28,
    borderRadius: 28,
    alignSelf: 'center',
    position: 'absolute',
    bottom: '10%',
    borderColor: '#464646',
    borderWidth: 6,
  },
});
export default About;
