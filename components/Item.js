import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight } from 'react-native';

import ModalInfo from './Modal';

import { ItemStyle } from '../styles';

const Item = ({ title, img, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={ItemStyle.item}>
      <TouchableHighlight
        style={ItemStyle.openButton}
        onLongPress={() => {
          navigation && navigation.push('Details', {
            item: title,
          })
        }}
        onPress={() => setModalVisible(true)}
      >
      <Image
        style={ItemStyle.img}
        source={{ uri: img }}
      />
      </TouchableHighlight>
      {modalVisible && (
      <ModalInfo
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={title}
      />
      )}
    </View>
  );
};

Item.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired
};

export default Item;
