import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/views/login/login';
import { images, COLORS } from "../constants";
import { Image, Text } from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{
        width: 50, height: 50,
        resizeMode: "contain",
      }}
      source={images.fuwu}
    />
  );
}

const NoAuth = createStackNavigator({

  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
}, {
  initialRouteName: "Login"
})

export default createAppContainer(NoAuth)