import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity, Alert
} from 'react-native';
import { images, COLORS, CSS } from "../../../../../constants";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

function pagina7(props) {

  const [token, setToken] = useState("");
  const [data, setdata] = useState([]);

  let { navigation } = props;

  let petro4 = navigation.state.params.petro3;
  let fajardo4 = navigation.state.params.fajardo3;
  let fico4 = navigation.state.params.fico3;
  console.log(petro4);
  console.log(fajardo4);
  console.log(fico4);
  // Validador1 = async () => {
  //   navigation.navigate('Login');
  // };
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


  const hableChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value });
  }
  const [state, setState] = useState({
    identificacion: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    departamento: '',
    municipio: '',
    puesto: '',
    mesa: '',
    comuna: ''
  });


  const envio = () => {
    axios
      .post('http://52.55.26.143:8060/api/votantes', {
        "identificacion": (state.identificacion),
        "nombres": (state.nombres),
        "apellidos": (state.apellidos),
        "telefono": (state.telefono),
        "departamento": (state.departamento),
        "municipio": (state.municipio),
        "puesto": (state.puesto),
        "mesa": (state.mesa),
        "comuna": (state.comuna),
        "posible": true,
        "estado": false,
        "votoSen": true,
        "votoCam": true,
        "campaña": ''
      }, {
        headers: {
          'x-token': token
        }
      }).then(function (response) {
        // handle success
        (JSON.stringify(response.data));
        console.log((response.data))
        alert("Resgistro Existoso!")
      })
      .catch(function (error) {
        // handle error
        alert("Ha ocurrido un error, verifica los datos!");
        console.log(error.message)
      });
    navigation.navigate({ routeName: 'Congreso' })
  };


  return (

    <ImageBackground source={images.fondo} style={CSS.Logincontainer}>




      <ScrollView>
        <Image
          style={{...CSS.img,height: hp('30%'),
          width: wp('50%'),marginLeft: wp('28%'),
          marginBottom: hp('-5%'), }}
          source={images.logo4}
        />

        <Text style={{
          marginTop: hp('3%'),
          marginBottom: hp('4'),
          fontSize: hp('3%'),
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}> REGISTRO POSIBLES VOTANTES
        </Text>

        <View >
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Número de cédula</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            keyboardType="numeric"
            onChangeText={(value) => hableChangeText('identificacion', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Nombre</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('nombres', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Apellido</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('apellidos', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Teléfono</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('apellido', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Departamento</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('departamento', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Municipio</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('municipio', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Puesto</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('puesto', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Mesa de votación</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('mesa', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Comuna </Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            keyboardType="numeric"
            onChangeText={(value) => hableChangeText('comuna', value)}
          />
          <Text style={CSS.pririodad}>
            Los campos con * son obligatorios
          </Text>
          <TouchableOpacity
            style={{
              ...CSS.siguiente,
              backgroundColor: '#132196'
            }}

            onPress={() => envio()}

          >
            <Text style={CSS.siguientetext}>GUARDAR</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </ImageBackground>
  );
};

export default pagina7;