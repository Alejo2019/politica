import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import RNPickerSelect from "react-native-picker-select";
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

} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { images, COLORS, CSS } from "../../../../../constants";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


function pagina2(props) {

  let { navigation } = props;
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);

  const [Candidato, setCandidato] = useState("PRUEBA");
  const [token, setToken] = useState("");
  let partido = navigation.state.params.partido;



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
    apellido:'',
    cedula: '',
    mesa: '',
    lugar: '',
    puesto: '',
    candidatoSen:'',
    candidatoCama: ''
  });

  const hableChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value });
  }
console.log("a")
console.log(Candidato)
  const envio = () => {
    axios
    .post('https://service-servicios.herokuapp.com/api/votantes', {
      "nombre": (state.nombre),
      "apellido": (state.apellido),
      "cedula": (state.cedula),
      "estado": false,
      "mesa": (state.mesa),
      "lugar": (state.lugar),
      "puesto": (state.puesto),
      "votosCam": true,
      "votoSena": false,
      "votoPresi": false,
      "tipoCampaña": "Congreso",
      "partido": partido,
      "candidatoSen": "Falta confi"
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
              alert("Ha ocurrido un error, verifica los datos!");

    });
    navigation.navigate({ routeName: 'Entes_territoriales' })
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

        }}> REGISTRO DE VOTANTES
        </Text>

        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Numero de cedula</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          selectionColor="#132196"
          onChangeText={(value) => hableChangeText('cedula', value)}
          keyboardType="numeric"

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
          selectionColor="#132196"
          onChangeText={(value) => hableChangeText('apellido', value)}
        />
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Lugar de votacion</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          selectionColor="#132196"
          onChangeText={(value) => hableChangeText('lugar', value)}

        />
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Mesa de votación </Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          selectionColor="#132196"
          keyboardType="numeric"
          onChangeText={(value) => hableChangeText('mesa', value)}

        />
        {/* <View style={CSS.viewCardHome}>
<Text style={CSS.asterisco}>*</Text>
<Text style={CSS.asterisco1}>Telefono</Text>
</View>
<TextInput style={CSS.input}
underlineColorAndroid="transparent"
placeholderTextColor="#132196"
autoCapitalize="none"
selectionColor="#132196"
onChangeText={(value) => hableChangeText('telefono', value)}
keyboardType="numeric"

/> */}


        {/* <View style={CSS.viewCardHome}>
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
<Text style={CSS.asterisco1}>Ciudad</Text>
</View>
<TextInput style={CSS.input}
underlineColorAndroid="transparent"
placeholderTextColor="#132196"
autoCapitalize="none"
selectionColor="#132196"
onChangeText={(value) => hableChangeText('ciudad', value)}
/>




*/}

        {/* <View style={CSS.viewCardHome}>
<Text style={CSS.asterisco}>*</Text>
<Text style={CSS.asterisco1}> Puesto</Text>
</View>
<TextInput style={CSS.input}
underlineColorAndroid="transparent"
placeholderTextColor="#132196"
autoCapitalize="none"
selectionColor="#132196"
keyboardType="numeric"
onChangeText={(value) => hableChangeText('puesto', value)}

/> */}

        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Selección de candidato camara</Text>
        </View>
        <View style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          selectionColor="#132196">
          <Picker
             onValueChange={(itemValue, itemIndex) => setCandidato(itemValue)}
            mode="dropdown" // Android only
            style={{ marginVertical: 10, padding: 10, borderWidth: 5, borderColor: "#666", }}
          >
            <Picker.Item label="Seleccione" value="Unknown" />
            <Picker.Item label="Candidato 1" value="Candidato 1" />
            <Picker.Item label="Candidato 2" value="Candidato 2" />
            <Picker.Item label="Candidato 3" value="Candidato 3" />

          </Picker>
        </View>
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Selección de candidato por senado</Text>
        </View>
        <View style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          selectionColor="#132196">
          <Picker
            selectedValue={Candidato}
            onValueChange={(value, index) => setCountry(value)}
            mode="dropdown" // Android only
            style={{ marginVertical: 10, padding: 10, borderWidth: 5, borderColor: "#666", }}
          >
            <Picker.Item label="Seleccione" value="Unknown" />
            <Picker.Item label="Candidato 1" value="Candidato 1" />
            <Picker.Item label="Candidato 2" value="Candidato 2" />
            <Picker.Item label="Candidato 3" value="Candidato 3" />
            
          </Picker>
        </View>
        {/* <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>¿Voto?</Text>
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
            style={{ marginVertical: 10, padding: 10, borderWidth: 5, borderColor: "#666", }}
          >
            <Picker.Item label="Seleccione" value="Unknown" />
            <Picker.Item label="Si" value="Si" />
            <Picker.Item label="No" value="No" />

            
          </Picker>
        </View> */}



        <Text style={CSS.pririodad}>
          Los campos con * es obligatorio
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

export default pagina2;