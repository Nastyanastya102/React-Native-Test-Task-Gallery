import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Input from '../components/Input';
import Gallery from '../components/Gallery';
import Details from '../components/Details';

const Stack = createStackNavigator();

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
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
    <Stack.Navigator>
      <Stack.Screen
        name="Gallery"
        options={{
          title: "Gallery",
          headerStyle: {
            backgroundColor: "lightcoral",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {props =>
          <>
            <Input setImages={setImages} setTotal={setTotal} page={page} images={images} {...props}/>
            <Gallery DATA={images} setPage={setPage} page={page} total={total} {...props}/>
          </>
        }
      </Stack.Screen>
      <Stack.Screen
        name="Details"
        options={{
          title: "Full Image",
          headerStyle: {
            backgroundColor: "lightcoral",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        component={Details}
      />
    </Stack.Navigator>
  )
};

export default Home;
