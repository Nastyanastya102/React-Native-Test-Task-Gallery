import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { ModalStyle } from '../styles';

const ModalInfo = ({ modalVisible, setModalVisible, title }) => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={ModalStyle.centeredView}>
        <View style={ModalStyle.modalView}>
          <Text style={ModalStyle.modalText}>
            <Text style={ModalStyle.innerText}>Description: </Text>
            {title.description
              ? title.description
              : title.alt_description
              ? title.alt_description
              : 'No description'
            }
          </Text>
          <Text style={ModalStyle.modalText}>
            <Text style={ModalStyle.innerText}>Likes: </Text>
            {title.likes}
          </Text>
          <Text style={ModalStyle.modalText}>
            <Text style={ModalStyle.innerText}>Author: </Text>
            {title.user.username}
          </Text>
          <Text style={ModalStyle.modalText}>
            <Text style={ModalStyle.innerText}>Location: </Text>
            {title.user.location || 'unknown'}
          </Text>
          <TouchableHighlight
            style={ModalStyle.closeButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={ModalStyle.buttonText}>Close Info</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
);

ModalInfo.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  title: PropTypes.object.isRequired
};

export default ModalInfo;
