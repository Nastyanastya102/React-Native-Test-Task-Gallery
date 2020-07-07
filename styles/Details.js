import {
  StyleSheet, Dimensions
} from 'react-native';

const win = Dimensions.get('window');

export const DetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 19,
    color: '#000',
    textTransform: 'uppercase',
    fontWeight: '800',
    paddingVertical: 20
  },
  img: {
    alignSelf: 'center',
    width: '100%',
    height: win.height - 90,
  }
});
