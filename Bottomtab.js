import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Notification from './screens/Notification';
import Home from './screens/Home';

const Bottomtab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'lightblue',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={Styles.container}>
                  <Image
                    style={[
                      Styles.icon,
                      {tintColor: focused ? 'black' : 'white'},
                    ]} // Adjusted tintColor
                    source={require('./assets/home.png')}
                  />
                  <Text style={Styles.txt}>Home</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={Styles.container}>
                  <Image
                    style={[
                      Styles.icon,
                      {tintColor: focused ? 'black' : 'white'},
                    ]} // Adjusted tintColor
                    source={require('./assets/notification.png')}
                  />
                  <Text style={Styles.txt}>Notification</Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Bottomtab;

const Styles = StyleSheet.create({
  icon: {
    width: 24, // Adjusted size
    height: 24, // Adjusted size
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 12,
  },
});
