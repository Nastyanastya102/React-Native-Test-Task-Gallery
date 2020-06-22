import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { TotalStyle } from '../styles';

const Total = ({ total }) => (
  total ? (
    <View>
      <Text style={TotalStyle.text}>We have {total} great images for you</Text>
    </View>
  ) : (
    <View>
      <Text style={TotalStyle.text}>Find your favorite images</Text>
    </View>
  )
);

Total.propTypes = {
  total: PropTypes.number
};

export default Total;
