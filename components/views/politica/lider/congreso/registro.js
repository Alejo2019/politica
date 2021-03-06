import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-picker/picker";
import Checkbox from 'expo-checkbox';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList

} from 'react-native';
import { images, COLORS, CSS } from "../../../../../constants";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalSelector from 'react-native-modal-selector';


function pagina2(props) {

  let { navigation } = props;
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [country, setCountry] = useState();
  const [country2, setCountry2] = useState();
  const [token, setToken] = useState("");
  const [data, setdata] = useState([]);
  const [partido, setPartido] = useState("");

  let petro4 = navigation.state.params.petro3;
  let fajardo4 = navigation.state.params.fajardo3;
  let fico4 = navigation.state.params.fico3;
  console.log(petro4);
  console.log(fajardo4);
  console.log(fico4);

  useEffect(() => {
    getToken()
    getCandidatos()
    getPartido()
  }, []);

  const getToken = async () => {
    try {
      let value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (error) {
      console.log(error)
    }
  };


  const getPartido = async () => {
    try {
      let value = await AsyncStorage.getItem('partido')
      setPartido(value);
    } catch (error) {
      console.log(error)
    }
  };

  const getCandidatos = async () => {
    axios
      .get(`http://http://52.55.26.143:8060api/buscar/partidos/partido`)
      .then(function (response) {
        // handle success
        setdata(response.data.result);
        console.log(response.data.result)
      })

  };

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

  const hableChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value });
  }

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
        "posible": false,
        "estado": false,
        "votoCam": false,
        "votoPres": true,
        "votoSen": false,
        "campa??a": 'Presidencia',
        "candidato": "Petro"
      }, {
        headers: {
          'x-token': token
        }
      }).then(function (response) {
      
        (JSON.stringify(response.data));
        console.log((response.data))
        alert("Resgistro Existoso!")
        navigation.navigate({ routeName: 'Congreso' })

      })
      .catch(function (error) {
       
        alert("Ha ocurrido un error, verifica los datos!");
        console.log(error.message)
      });
  };

 

  return (

    <ImageBackground source={images.fondo} style={CSS.Logincontainer}>



      <ScrollView>


        <Image
          style={{
            ...CSS.img, height: hp('30%'),
            width: wp('50%'), marginLeft: wp('28%'),
            marginBottom: hp('-5%'),
          }}
          source={images.logo6}
        />

        <Text style={{

          marginBottom: hp('1'),
          fontSize: hp('3%'),
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}> REGISTRO DE VOTANTES
        </Text>

        <View >
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>N??mero de C??dula
</Text>
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
            <Text style={CSS.asterisco1}>Tel??fono</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            keyboardType="numeric"
            onChangeText={(value) => hableChangeText('telefono', value)}
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
            onChangeText={(value) => hableChangeText('muncipio', value)}
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
            <Text style={CSS.asterisco1}>Mesa de votaci??n</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            keyboardType="numeric"
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


        </View>



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




        

      </ScrollView>
    </ImageBackground>
  );
};

export default pagina2;