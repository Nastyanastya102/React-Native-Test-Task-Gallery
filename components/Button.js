import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

const Buttons = ({ onSearch }) => (
  <Button
    title="Find"
    color="#6799f5d4"
    onPress={onSearch}
  />
);

Buttons.propTypes = {
  onSearch: PropTypes.func
};

export default  Buttons;
