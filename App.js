import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './Navigation/DrawerNavigation';
import BottomTabNavigator from './Navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";

export default function App() {
  return (
    
     
     
     <NavigationContainer>
     <DrawerNavigator/>
     </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
