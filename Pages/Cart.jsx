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
const Cart = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assests/original.png')}
      style={styles.mainbody}>
      <View style={styles.topbox}>
        <TouchableOpacity onPress={() => navigation.navigate('Mainpage')}>
          <Image source={require('../assests/back.png')} />
        </TouchableOpacity>
        <LinearTextGradient
          style={{fontWeight: 'bold', fontSize: 35, paddingTop: 15}}
          locations={[0, 1]}
          colors={['#C6C6C6', '#C6C6C6']}
          start={{x: 1, y: 43}}
          end={{x: 1, y: 3}}>
          <Text style={{width: '100%'}}>Shopping Cart</Text>
        </LinearTextGradient>
        <LinearTextGradient
          style={{fontWeight: '400', fontSize: 30}}
          locations={[0, 1]}
          colors={['#FFFFFF', '#C5C5C5']}
          start={{x: 5, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={{fontSize: 19}}>2 items</Text>
        </LinearTextGradient>
        <TouchableOpacity
          style={{
            backgroundColor: '#E7B545',
            padding: 10,
            borderRadius: 5,
            opacity: 0.8,
            marginTop: 8,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '600',
              color: '#282120',
            }}>
            Proceed to Buy (2 items)
          </Text>
        </TouchableOpacity>

        <View
          style={{
            paddingTop: 10,
            borderBottomColor: '#FFFFFF',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
      <View style={styles.subbody}>
        <ScrollView style={styles.cartbody}>
          <TouchableOpacity style={styles.cartitem}>
            <View style={styles.leftbox}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                }}
                source={require('../assests/akmjpg.jpg')}
              />
            </View>
            <View style={styles.rightbox}>
              <View style={styles.righttop}>
                <Text
                  style={{
                    color: '#C5C5C5',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingBottom: 5,
                  }}>
                  AKM Adjustible Stock
                </Text>
                <Text style={{color: '#FFFF', fontSize: 18, fontWeight: '500'}}>
                  135.67 $
                </Text>
                <Text
                  style={{
                    color: '#93E396',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}>
                  In stock
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  paddingTop: 5,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#E7B545',
                    borderRadius: 5,
                    padding: 7,
                    width: 80,
                    margin: 6,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    Buy now
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#C5C5C5',
                    borderRadius: 5,
                    padding: 7,
                    width: 80,
                    margin: 6,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartitem}>
            <View style={styles.leftbox}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                  resizeMode: 'stretch',
                }}
                source={require('../assests/M16A4.jpg')}
              />
            </View>
            <View style={styles.rightbox}>
              <View style={styles.righttop}>
                <Text
                  style={{
                    color: '#C5C5C5',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingBottom: 5,
                  }}>
                  M16A4 Machine Caliper
                </Text>
                <Text style={{color: '#FFFF', fontSize: 18, fontWeight: '500'}}>
                  674.36 $
                </Text>
                <Text
                  style={{
                    color: '#93E396',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingTop: 5,
                    paddingBottom: 5,
                  }}>
                  In stock
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  paddingTop: 5,
                  //justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#E7B545',
                    borderRadius: 5,
                    padding: 7,
                    width: 80,
                    margin: 6,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    Buy now
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#C5C5C5',
                    borderRadius: 5,
                    padding: 7,
                    width: 80,
                    margin: 6,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.bottombox}></View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  bottombox: {
    flex: 1,
    backgroundColor: 'white',
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
    rowGap: 8,
    justifyContent: 'flex-start',
    paddingStart: 30,
    paddingEnd: 30,
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
    height: 155,
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
});

export default Cart;
