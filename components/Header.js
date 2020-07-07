import React from 'react';
import { View, Text } from 'react-native';

import { HeaderStyle } from '../styles';

const Header = () => (
  <View style={HeaderStyle.container}>
    <Text style={HeaderStyle.title}>Contacts</Text>
  </View>
);

export default Header;
