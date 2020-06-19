import {
  StyleSheet,
} from 'react-native';

export const ModalStyle = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    top: '30%',
    left: '5%',
    right: '5%'
  },
  modalView: {
    margin: 20,
    padding: 15,
    width: '90%',
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    textTransform: 'capitalize',
    marginBottom: 12,
    alignSelf: 'flex-start'
  },
  closeButton: {
    backgroundColor: '#6799f5d4',
    elevation: 4,
    padding: 10,
    paddingHorizontal: 25,
    marginTop: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  innerText: {
    fontSize: 16,
    fontWeight: '700'
  }
});
