/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import About from './Pages/About';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Navbar from './Components/navbar';
import MainPage from './Pages/MainPage';
import BuyPage from './Pages/BuyPage';
import Chatpage from './Pages/Chatpage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import CameraMain from './Pages/CameraMain';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createMaterialTopTabNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Mainpage"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainbody: {
    backgroundColor: 'black',
  },
});

export default App;

{
  /* <NavigationContainer>
<Stack.Navigator>
  
   <Stack.Screen name="Home" component={HomeScreen} />
   <Stack.Screen name="About" component={AboutScreen} />
 </Stack.Navigator>
</NavigationContainer>  */
}
