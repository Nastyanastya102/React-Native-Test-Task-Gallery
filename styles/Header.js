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
    paddingVertical: 15
  },
  title: {
    fontSize: 17,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '800'
  },
  img: {
    width: 25,
    height: 25
  }
});
