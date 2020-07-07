import React from 'react';
import { SafeAreaView, Image } from 'react-native';

import { DetailsStyle } from '../styles';

const Details = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={DetailsStyle.container}>
      <Image
        style={DetailsStyle.img}
        source={{ uri: item.urls.full }}
      />
    </SafeAreaView>
  );
};

export default Details;
