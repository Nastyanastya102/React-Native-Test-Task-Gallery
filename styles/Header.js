import {
  StyleSheet,
} from 'react-native';

export const HeaderStyle = StyleSheet.create({
  container: {
    backgroundColor: 'lightcoral',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 14,
    paddingTop: 39,
    shadowColor: '#000',
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
});
