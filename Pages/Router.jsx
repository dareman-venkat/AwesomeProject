/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React , {useContext, useState} from 'react';
//import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Cart from './Cart';
import Navbar from '../Components/navbar';
import MainPage from './MainPage';
import BuyPage from './BuyPage';
import Chatpage from './Chatpage';
import Login from './Login';
import Signup from './Signup';
import CameraMain from './CameraMain';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext  from '../AuthProvider';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

const Stack = createNativeStackNavigator();

function Router() {
 const [isLoggedIn,setIsLoggedin] = useState(AsyncStorage.getItem('token'))
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createMaterialTopTabNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log("isloogedind",isLoggedIn)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {
            isLoggedIn ? (
                <>
                 <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                }}
              />
                <Stack.Screen
                name={"Mainpage"}
                component={MainPage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Navbar"
                component={Navbar}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="About"
                component={About}
                options={{
                  headerShown: false,
                }}
              />
             
              <Stack.Screen
                name="BuyPage"
                component={BuyPage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Chatpage"
                component={Chatpage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="CameraMain"
                component={CameraMain}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                  headerShown: false,
                }}
              /> 
              </> 
            ):(
                <>
                <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                }}
              />
              </>
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainbody: {
    backgroundColor: 'black',
  },
});

export default Router;

{
  /* <NavigationContainer>
<Stack.Navigator>
  
   <Stack.Screen name="Home" component={HomeScreen} />
   <Stack.Screen name="About" component={AboutScreen} />
 </Stack.Navigator>
</NavigationContainer>  */
}
