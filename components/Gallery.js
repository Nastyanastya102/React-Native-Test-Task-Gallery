import React from 'react';
import PropTypes from 'prop-types';

import { SafeAreaView, FlatList } from 'react-native';

import { GalleryStyle } from '../styles';
import Item from './Item';

const Gallery = ({ DATA }) => (
  <SafeAreaView style={GalleryStyle.container}>
    <FlatList
      contentContainerStyle={GalleryStyle.list}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={DATA}
      renderItem={({ item }) => <Item title={item} img={item.urls.regular}/>}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
);

Gallery.propTypes = {
  DATA: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Gallery;
