import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Notification from './screens/Notification';
import Home from './screens/Home';

const Toptab = () => {
  const Top = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Top.Navigator>
        <Top.Screen name="Home" component={Home} />
        <Top.Screen name="Notification" component={Notification} />
      </Top.Navigator>
    </NavigationContainer>
  );
};

export default Toptab;
