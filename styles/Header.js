import {
  StyleSheet,
} from 'react-native';

export const HeaderStyle = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase'
  },
  img: {
    width: 25,
    height: 25
  }
});
