import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-picker/picker";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity, Alert, ActivityIndicator, ScrollView
} from 'react-native';
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { images, COLORS, CSS } from "../../../constants";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';

function Login(props) {
  let { navigation } = props;
  const [country, setCountry] = useState('Unknown');

  const [state, setState] = useState({
    correo: '',
    contraseña: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const hableChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value });
  }

  const Validador = async (dispatch) => {
    console.log(state);
    await axios
      .post('http://192.168.1.6:8060/api/auth/login', {
        "correo": (state.correo),
        "contraseña": (state.contraseña)
      }).then(function (response) {
        console.log(response.data);
        AsyncStorage.setItem('token', response.data.token);
        AsyncStorage.setItem('rol', response.data.usuario.rol);
        AsyncStorage.setItem('id', response.data.usuario.uid);
        AsyncStorage.setItem('user', JSON.stringify(response.data.usuario));
        if (response.data.usuario.rol === 'LIDER_ROLE') {
          navigation.navigate('Iniciov1');
        } else if (response.data.usuario.rol === 'TESTIGO_ROLE') {
          navigation.navigate('Pagina1E');
        } else {
          navigation.navigate('Iniciov1');
        }
      })
      .catch(function (error) {
        setShowAlert(true);
      })
  };

  const hideAlert = (value) => {
    setShowAlert(value);
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
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Datos incorrectos"
        message="Usuario o contraseña incorrectos"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={false}
        cancelText="Cerrar"
        cancelButtonColor="#132196"
        onCancelPressed={() => {
          hideAlert(false);
        }}
      />
      <Image
        style={CSS.img}
        source={images.logo2}
      />
      <ScrollView>

        <View style={CSS.inputlogin1}>
          <Text style={CSS.inputlogin}>Usuario</Text>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('correo', value)}
          />

          <Text style={CSS.inputlogin}>Contraseña</Text>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            secureTextEntry={true}
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('contraseña', value)}
          />
        </View>
        <View style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          selectionColor="#132196">
          <Picker
            selectedValue={country}
            onValueChange={(value, index) => setCountry(value)}
            mode="dropdown" // Android only
            style={{ marginVertical: 10, padding: 10, borderWidth: 5, borderColor: "#666", color: '#132196'}}
          >
            <Picker.Item label="Seleccione el pais" value="Unknown" />
            <Picker.Item label="Colombia" value="Colombia" />

          </Picker>
        </View>
        <View style={CSS.siguientecontainer}>
          <TouchableOpacity
            style={{
              ...CSS.siguiente1,
              backgroundColor: '#132196',
              marginBottom: 10
            }}
            onPress={() => Validador()}
          >
            <Text style={CSS.siguientetext}>INICIAR SESIÓN</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
          style={{
            ...CSS.siguiente1,
            backgroundColor: '#132196'
          }}
          onPress={() => Validador2()}
        >
          <Text style={CSS.siguientetext}>E14</Text>
        </TouchableOpacity> */}
        </View>

      </ScrollView>


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