/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
//import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//import CameraMain from './Pages/CameraMain';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthProvider from './AuthProvider';
import Router from './Pages/Router';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createMaterialTopTabNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
 
  return (
    // <AuthProvider>
    <>
      <Router/></>
    // </AuthProvider>
    
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
