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


function pagina5(props) {

  let { navigation } = props;

  const [country, setCountry] = useState('Unknown');



  useEffect(() => {
    //getDataUsingSimpleGetCall()
  }, []);

  const [state, setState] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    telefono:'',
    correo:'',
    mesa:'',
    partido: '',
    candidato:'',
  });

  const hableChangeText = (nombre, value) =>{
    setState({...state, [nombre]: value});
  }

  const envio = () => {
    axios
    .post('http://192.168.1.6:8060/api/users', {
      "nombre": (state.nombre),
      "apellido":(state.apellido),
      "cedula":(state.cedula),
      "correo": (state.correo),
     "telefono": (state.telefono),
      "estado": false,
      "google": false,
      "rol": "USER_ROLE",
      "departamento": "Valle",
      "ciudad": "cali",
      "mesa": (state.mesa),
      "candidato": (state.candidato),
      "partido": (state.partido)
    }).then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
        console.log((response.data))
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert('Finally called');
      });
      navigation.navigate({ routeName: 'Pagina2' })
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
          marginTop: hp('3%'),
          marginBottom: hp('1'),
          fontSize: hp('3%'),
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}> REGISTRO DE TESTIGÓ
        </Text>

        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Testigó de votacion</Text>
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
          <Text style={CSS.asterisco1}>Telefono</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('telefono', value)}
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
          <Text style={CSS.asterisco1}>Departamento</Text>
        </View>
        <View style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none">
          <Picker
            selectedValue={country}
            onValueChange={(value, index) => setCountry(value)}
            mode="dropdown" // Android only
            style={{ marginVertical: 10, padding: 10, borderWidth: 5, borderColor: "#666", }}
          >
            <Picker.Item label="Seleccione" value="Unknown" />
            <Picker.Item label="Australia" value="Australia" />
            <Picker.Item label="Belgium" value="Belgium" />
            <Picker.Item label="Canada" value="Canada" />
            <Picker.Item label="India" value="India" />
            <Picker.Item label="Japan" value="Japan" />
          </Picker>
        </View>
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Ciudad</Text>
        </View>
        <View style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none">
          <Picker
            selectedValue={country}
            onValueChange={(value, index) => setCountry(value)}
            mode="dropdown" // Android only
            style={{ marginVertical: 10, padding: 10, borderWidth: 5, borderColor: "#666", }}
          >
            <Picker.Item label="Seleccione" value="Unknown" />
            <Picker.Item label="Australia" value="Australia" />
            <Picker.Item label="Belgium" value="Belgium" />
            <Picker.Item label="Canada" value="Canada" />
            <Picker.Item label="India" value="India" />
            <Picker.Item label="Japan" value="Japan" />
          </Picker>
        </View>
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Lugar de votacion</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          keyboardType="numeric"

        />

        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Mesa de votacion</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          keyboardType="numeric"

        />
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Partido</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('mesa', value)}
        />
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Candidato</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('partido', value)}
        />
        <View style={CSS.viewCardHome}>
          <Text style={CSS.asterisco}>*</Text>
          <Text style={CSS.asterisco1}>Lider</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          onChangeText={(value) => hableChangeText('candidato', value)}
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