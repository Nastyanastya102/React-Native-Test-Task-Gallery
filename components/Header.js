import React from 'react'
import { View, Text, Image } from 'react-native';

import { HeaderStyle } from '../styles';

const Header = () => (
  <View style={HeaderStyle.container}>
    <Image
      style={HeaderStyle.img}
      source={require('../assets/calm.png')}
    />
    <Text style={HeaderStyle.title}>Unsplash Gallery</Text>
  </View>
);

export default Header;
