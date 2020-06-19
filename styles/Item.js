import {
  StyleSheet,
} from 'react-native';

export const ItemStyle = StyleSheet.create({
  item: {
    backgroundColor: '#000',
    marginVertical: 2,
    marginHorizontal: 2,
    flex: 2,
    flexDirection: 'column'
  },
  img: {
    maxWidth: '100%',
    height: 300,
    resizeMode: 'cover'
  },
  openButton: {
    backgroundColor: '#dcdcdc',
    padding: 3,
    elevation: 1
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
