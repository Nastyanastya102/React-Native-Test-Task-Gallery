import React, { useEffect, useState } from 'react';

import Gallery from '../components/Gallery';

const Home = () => {
  const [images, setImages] = useState([]);
  const unsplashImg = 'https://api.unsplash.com/photos/?client_id=T2V-9KGVeL1lxnf_QSxi0d6KD3Mmq3gew8JxVV3dosA';

  const handleData = async () => {
    const req = await fetch(unsplashImg);
    const json = await req.json();
    setImages(json);
  };

  useEffect( () => {
    handleData();
  }, []);
  
  return (
    <Gallery DATA={images}/>
  )
};

export default Home;
