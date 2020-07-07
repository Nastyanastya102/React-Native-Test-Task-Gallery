import React from 'react';
import { Text, View, Image } from 'react-native';

import { ContactStyle } from '../styles';

const Contact = () => (
  <View style={ContactStyle.container}>
    <View style={ContactStyle.iconContainer}>
      <Image
        style={ContactStyle.img}
        source={require('../assets/mail.png')}
      />
      <Text style={{...ContactStyle.text, color: "#fff"}}>Contact Us</Text>
    </View>

    <View style={ContactStyle.contactBlock}>
      <View style={ContactStyle.item}>
        <Image
          style={ContactStyle.icon}
          source={require('../assets/phone1.png')}
        />
        <Text style={ContactStyle.text}>
           +38093-255-255-25
        </Text>
      </View>
      <View style={ContactStyle.item}>
        <Image
          style={ContactStyle.icon}
          source={require('../assets/mail1.png')}
        />
        <Text style={ContactStyle.text}>
          youremail@gmail.com
        </Text>
      </View>
      <View style={ContactStyle.item}>
        <Image
          style={ContactStyle.icon}
          source={require('../assets/skype.png')}
        />
        <Text style={ContactStyle.text}>
          youreskype@gmail.com
        </Text>
      </View>
      <View style={ContactStyle.item}>
        <Image
          style={ContactStyle.icon}
          source={require('../assets/instagram-sketched.png')}
        />
        <Text style={ContactStyle.text}>
          instagram.com
        </Text>
      </View>
    </View>
  </View>
);

export default Contact
