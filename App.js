import React, { useEffect, useState } from 'react';
import { StatusBar, View, ActivityIndicator } from 'react-native';

import Header from './components/Header';
import Gallery from './components/Gallery';

import { AppStyle } from './styles';

const App = () => {
  const [loader, setLoader] = useState(true);
  const [images, setImages] = useState([]);
  const unsplashImg = 'https://api.unsplash.com/photos/?client_id=T2V-9KGVeL1lxnf_QSxi0d6KD3Mmq3gew8JxVV3dosA';

  const handleData = async () => {
    const req = await fetch(unsplashImg);
    const json = await req.json();
    setImages(json);
  };

  useEffect( () => {
    setLoader(false);
    handleData();
  }, []);

  return (
    <>
      <StatusBar hidden={true}/>
      <Header/>
      <View style={AppStyle.container}>
        {loader ? (
          <ActivityIndicator size="large" color="#0000ff"/>
        ) : (
          <Gallery DATA={images}/>
        )}
      </View>
    </>
  );
}

export default App;
