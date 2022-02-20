import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity, Alert, ActivityIndicator
} from 'react-native';
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { images, COLORS, CSS } from "../../../constants";

function Login(props) {

  Validador = async () => {
    props.navigation.navigate('Iniciov1');
  };
  Validador1 = async () => {
    props.navigation.navigate('Pagina1V');
  };

  return (
    <ImageBackground source={images.backstart} style={CSS.Logincontainer}>
      <View style={CSS.LoginLogo}>
        <Image style={CSS.LogintinyLogo} source={images.logo} />
      </View>

      <View>
        <TextInput style={CSS.inputlogin}
          underlineColorAndroid="transparent"
          placeholder="Usuario"
          placeholderTextColor="#132196"
          autoCapitalize="none"

        />
        <TextInput style={CSS.inputlogin}
          underlineColorAndroid="transparent"
          placeholder="Contraseña"
          placeholderTextColor="#132196"
          autoCapitalize="none"

        />
      </View>
      {/* <View>
        <TouchableOpacity style={CSS.boton} onPress={() => Validador()}>
          <Text style={CSS.botontext}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>
      </View> */}
      <View style={CSS.viewCardHome}>

        <View>
          <View>
            <TouchableOpacity style={CSS.boton} onPress={() => Validador()}>
              <Text style={CSS.botontext}>
                Lideres
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={CSS.boton1} onPress={() => Validador()}>
          <Text style={CSS.botontext}>
            Votantes
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

}

export default Login