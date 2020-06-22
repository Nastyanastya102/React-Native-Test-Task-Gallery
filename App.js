import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './components/Tabs';
import Header from './components/Header';

const Stack = createStackNavigator();
const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect( () => {
    setLoader(false);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Header/>
        {loader ? (
          <ActivityIndicator size="large" color="#0000ff"/>
        ) : (
         <Tabs/>
        )}
    </NavigationContainer>
  );
}

export default App;
