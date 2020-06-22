import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import Input from '../components/Input';
import Gallery from '../components/Gallery';

import { PagesStyle } from '../styles';

const Search = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  return (
    <SafeAreaView style={PagesStyle.container}>
      <Input setImages={setImages} setTotal={setTotal} page={page} images={images}/>
      <Gallery DATA={images} setPage={setPage} page={page} total={total}/>
    </SafeAreaView>
  )
};

export default Search;
