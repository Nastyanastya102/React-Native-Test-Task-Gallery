import {
  StyleSheet, Dimensions
} from 'react-native';

export const ContactStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactBlock: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'dimgrey',
    fontWeight: '400'
  },
  iconContainer: {
    flex: .6,
    backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 15
  },
  icon: {
    width: 35,
    height: 35,
  },
  item: {
    alignItems: 'center',
    width: '100%'
  }
});