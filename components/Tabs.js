import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from '../screens/Home';
import Search from '../screens/Search';

import { TabsStyle } from '../styles';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
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
      name="Search"
      component={Search}
      options={{
        tabBarLabel: "Search",
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
