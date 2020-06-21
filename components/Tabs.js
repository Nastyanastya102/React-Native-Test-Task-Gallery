import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from '../screens/Home';
import Details from '../screens/Details';

import { TabsStyle } from '../styles/Tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
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
      name="Details"
      component={Details}
      options={{
        tabBarLabel: "Details",
        tabBarIcon: () => (
          <Image
            style={TabsStyle.img}
            source={require('../assets/help.png')}
        />
        )
      }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
