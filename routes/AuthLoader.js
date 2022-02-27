import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
  View,
  Image
} from 'react-native';
import bgImage from '../img/Fondos/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthLoader extends Component {

  componentDidMount() {

    setTimeout(this._bootstrapAsync, 2000);
  }

  _bootstrapAsync = async () => {
    const Rol = await AsyncStorage.getItem('rol');
    const Token = await AsyncStorage.getItem('token');
    if (Rol === 'LIDER_ROLE') {
      this.props.navigation.navigate(Token ? 'App' : 'Auth');
    }else if (Rol === 'TESTIGO_ROLE')  {
      this.props.navigation.navigate(Token ? 'AppTestigo' : 'Auth');
    }else {
      this.props.navigation.navigate(Token ? 'App' : 'Auth');
    }
  };

  render() {
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Image style={styles.tinyLogo} source={bgImage} />
        <ActivityIndicator size="large" color="#FFA73F" />
      </View>
    );
  }

}

const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  tinyLogo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});

export default AuthLoader