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
} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
const MainPage = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assests/original.png')}
      style={styles.mainbody}>
      <View style={styles.topbox}>
        <TouchableOpacity onPress={() => navigation.navigate('Navbar')}>
          <Image source={require('../assests/notification.png')} />
        </TouchableOpacity>
        <View style={styles.logo}>
          <Image source={require('../assests/logo.png')} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Image source={require('../assests/profile.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.subbody}>
        <View style={{marginBottom: 30}}>
          <LinearTextGradient
            style={{fontWeight: 'bold', fontSize: 40}}
            locations={[0, 1]}
            colors={['#C6C6C6', '#C6C6C6']}
            start={{x: 1, y: 43}}
            end={{x: 1, y: 3}}>
            <Text style={{width: '100%', marginRight: 40}}>Hi, Jeff!</Text>
          </LinearTextGradient>
          <LinearTextGradient
            style={{fontWeight: 'bold', fontSize: 40}}
            locations={[0, 1]}
            colors={['#FFFFFF', '#C6C6C6']}
            start={{x: 5, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={{fontSize: 22}}>What would you like to do?</Text>
          </LinearTextGradient>
        </View>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('BuyPage')}>
          <View style={styles.imagecont}>
            <Image style={styles.img} source={require('../assests/buy.png')} />
          </View>
          <View style={styles.textcont}>
            <Text style={styles.titlebar}>Buy Firearms</Text>
            <Text style={styles.subTitlebar}>Approved</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('CameraMain')}>
          <View style={styles.imagecont}>
            <Image style={styles.img} source={require('../assests/sell.png')} />
          </View>
          <View style={styles.textcont}>
            <Text style={styles.titlebar}>Sell Firearms</Text>
            <Text style={styles.subTitlebar}>Approved</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.searchbox}>
          <TextInput
            style={styles.input}
            //onChangeText={onChangeNumber}
            //value={number}
            placeholderTextColor="#5E5E5E"
            placeholder="Search"
          />
          <Image
            style={styles.icon}
            source={require('../assests/search.png')}
          />
        </View>
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
  topbox: {
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 35,
    marginBottom: 3,
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
    padding: 28,
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
});

export default MainPage;
