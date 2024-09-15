import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Notification from './screens/Notification';
import Home from './screens/Home';
const Tab = createBottomTabNavigator();

const Bottomtab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Bottomtab;
