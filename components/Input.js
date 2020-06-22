import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';

import Buttons from './Button';

import { InputStyle } from '../styles';

const Input = ({ images, setImages, page, setTotal }) => {
  const [value, onChangeText] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const query = value.trim();
    if (!query) return;
    setQuery(value.trim());
    const req =
    await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=10&page=1&query=${query}&client_id=T2V-9KGVeL1lxnf_QSxi0d6KD3Mmq3gew8JxVV3dosA`);
    const json = await req.json();
    setImages(json.results);
    setTotal(json.total);
    onChangeText('');
  };

  const handlePadination = async (pageNubmer, querySlector) => {
    if (!querySlector) return;
    const req =
    await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=10&page=${pageNubmer}&query=${querySlector}&client_id=T2V-9KGVeL1lxnf_QSxi0d6KD3Mmq3gew8JxVV3dosA`);
    const json = await req.json();
    setImages([...images, ...json.results]);
  };

  useEffect(() => {
    query && handlePadination(page, query);
  }, [page]);

  return (
    <View style={InputStyle.container}>
      <TextInput
        style={InputStyle.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder="Put your query"
      />
      <Buttons onSearch={handleSearch}/>
    </View>
  );
};

Input.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  setImages: PropTypes.func,
  page: PropTypes.number,
  setTotal: PropTypes.func
};

export default  Input;
