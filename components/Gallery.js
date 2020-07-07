import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import Item from './Item';

const Gallery = ({ DATA, setPage, page, total, navigation }) => {

  const onEnd = () => {
    setPage && setPage(page + 1);
  };

  return (
    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      onEndReached={onEnd}
      data={DATA}
      renderItem={({ item }) => <Item title={item} img={item.urls.regular} navigation={navigation}/>}
      keyExtractor={(item, index) => item.id + index}
    />
  );
};

Gallery.propTypes = {
  setPage: PropTypes.func,
  page: PropTypes.number,
  total: PropTypes.number,
  DATA: PropTypes.arrayOf(PropTypes.object)
};

export default Gallery;
