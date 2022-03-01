import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,

} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { images, COLORS, CSS } from "../../../../../constants";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

function pagina5(props) {

  let { navigation } = props;

  const [token, setToken] = useState("");

  useEffect(() => {
    getToken()
  }, []);

  const getToken = async () => {
    try {
      let value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (error) {
     console.log(error)
    }
  };

  const [state, setState] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    contraseña: '',
    ciudad: '',
    departamento: '',
    lugar: '',
    zona: ''
  });

let rol = "TESTIGO_ROLE"



  const hableChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value });
  }

  const envio = () => {
    axios
      .post('http://192.168.0.118:8060/api/testigos', {
        "nombre":(state.nombre),
        "apellido":(state.apellido),
        "cedula":(state.cedula),
        "correo":(state.correo),
        "contraseña":(state.contraseña),
        "ciudad":(state.ciudad),
        "departamento":(state.departamento),
        "lugar":(state.lugar),
        "zona":(state.zona),
        "rol":"TESTIGO_ROLE"
      }, {
        headers: {
          'x-token': token
        }
      }).then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
        console.log((response.data))
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
        console.log(errors)
      });
    navigation.navigate({ routeName: 'Pagina8' })
  };

  return (

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

      <ScrollView>

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

        <Text style={{
          marginBottom: hp('1'),
          fontSize: hp('3%'), 
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}> REGISTRO DE TESTIGOS
        </Text>

        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Nombre</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('nombre', value)}
        />
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Apellido</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('apellido', value)}
        />
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Cedula</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('cedula', value)}
          keyboardType="numeric"

        />
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Correo</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('correo', value)}
        />

        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Contraseña</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('contraseña', value)}
        />

        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Departamento</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('departamento', value)}
        />
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Ciudad</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('ciudad', value)}
        />
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Lugar de votacion</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('lugar', value)}
        />
      <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Zona</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('zona', value)}
        />

  
        <Text style={CSS.pririodad}>
          Los campos con * es obligatorio
        </Text>


        <TouchableOpacity
          style={{
            ...CSS.siguiente,
            backgroundColor: '#132196'
          }}

          onPress={envio}

        >
          <Text style={CSS.siguientetext}>SIGUIENTE</Text>
        </TouchableOpacity>




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

      </ScrollView>
    </ImageBackground>
  );
};

export default pagina5;