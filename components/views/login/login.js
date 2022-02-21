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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { images, COLORS, CSS } from "../../../constants";

function Login(props) {
  let { navigation } = props;

  Validador = async () => {
    props.navigation.navigate('Iniciov1');
  };
  Validador1 = async () => {
    props.navigation.navigate('Pagina1V');
  };

  return (
    // <ImageBackground source={images.backstart} style={CSS.Logincontainer}>

    //   <ImageBackground source={images.fondologin} style={CSS.Logincontainer1}>
    //     <View style={CSS.LoginLogo}>
    //       <Image style={CSS.LogintinyLogo} source={images.logo2} />
    //     </View>

    //     <View>
    //       <TextInput style={CSS.inputlogin}
    //         underlineColorAndroid="transparent"
    //         placeholder="Usuario"
    //         placeholderTextColor="#132196"
    //         autoCapitalize="none"

    //       />
    //       <TextInput style={CSS.inputlogin}
    //         underlineColorAndroid="transparent"
    //         placeholder="Contraseña"
    //         placeholderTextColor="#132196"
    //         autoCapitalize="none"

    //       />
    //     </View>
    //     {/* <View>
    //     <TouchableOpacity style={CSS.boton} onPress={() => Validador()}>
    //       <Text style={CSS.botontext}>
    //         Iniciar sesión
    //       </Text>
    //     </TouchableOpacity>
    //   </View> */}
    //     {/* //<View style={CSS.viewCardHome}> */}

    //       <View>
    //         <View>
    //           <TouchableOpacity style={CSS.boton} onPress={() => Validador()}>
    //             <Text style={CSS.botontext}>
    //               Lideres
    //             </Text>
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //       <TouchableOpacity style={CSS.boton1} onPress={() => navigation.navigate({ routeName: 'Pagina1V' })}>
    //         <Text style={CSS.botontext}>
    //           Votantes
    //         </Text>
    //       </TouchableOpacity>
    //     {/* //</View> */}
    //   </ImageBackground>
    // </ImageBackground>




    <ImageBackground source={images.fondo} style={CSS.Logincontainer}>

      {/* <TouchableOpacity style={CSS.cardTitleContainer} onPress={() => navigation.navigate({ routeName: 'ProfileProviders'})}>
        <View style={{ alignSelf: "center", alignItems: "flex-start" }}>
          <View>
            <Text style={CSS.tituloHome}>
            <Text style={CSS.cardHomeTitleTitle}>Hola usuario
              </Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={CSS.cardHome} onPress={() => navigation.navigate({ routeName: 'Iniciov1' })}>
            <View style={CSS.viewCardHome}>
              <View style={{ flex: 4, marginLeft:10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                  </View>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={CSS.tituloHome}>
                      algun texto
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ flex: 1, alignSelf:'center' }} >
                <Icon name="chevron-right" size={80}
                  color={COLORS.blue} />
              </View>
            </View>
          </TouchableOpacity> */}
      <Image
        style={CSS.img}
        source={images.logo2}
      />
      <View style={CSS.inputlogin1}>
        <Text style={CSS.inputlogin}>Usuario</Text>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
        />

        <Text style={CSS.inputlogin}>Contraseña</Text>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
        />
      </View>

      <View style={CSS.siguientecontainer}>
        <TouchableOpacity
          style={{
            ...CSS.siguiente1,
            backgroundColor: '#132196'
          }}
          onPress={() => Validador()}
        >
          <Text style={CSS.siguientetext}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...CSS.siguiente1,
            backgroundColor: '#132196'
          }}
          onPress={() => Validador1()}
        >
          <Text style={CSS.siguientetext}>VOTANTES</Text>
        </TouchableOpacity>
      </View>


      {/* <TouchableOpacity style={CSS.cardHome} onPress={() => navigation.navigate({ routeName: 'Iniciov1' })}>
            <View style={CSS.viewCardHome}>
              <View style={{ flex: 4, marginLeft:10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                  </View>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={CSS.tituloHome}>
                      algun texto
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ flex: 1, alignSelf:'center' }} >
                <Icon name="chevron-right" size={80}
                  color={COLORS.blue} />
              </View>
            </View>
          </TouchableOpacity> */}
    </ImageBackground>

  );

}

export default Login