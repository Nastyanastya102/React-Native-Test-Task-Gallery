import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from '../screens/Home';
import Contacts from '../screens/Contacts';

import { TabsStyle } from '../styles';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'lightcoral',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: () => (
          <Image
            style={TabsStyle.img}
            source={require('../assets/home.png')}
          />
        )
      }}
    />
    <Tab.Screen
      name="Contacts"
      component={Contacts}
      options={{
        tabBarLabel: "Contacts",
        tabBarIcon: () => (
          <Image
            style={TabsStyle.img}
            source={require('../assets/search.png')}
          />
        )
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
