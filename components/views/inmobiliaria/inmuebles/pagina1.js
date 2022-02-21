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
  Alert

} from 'react-native';
import { images, COLORS, CSS } from "../../../../constants";
import axios from "axios";


function pagina1(props) {

  let { navigation } = props;

  useEffect(() => {
    getDataUsingSimpleGetCall()
  }, []);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('http://192.168.0.118:8060/api/users')
      .then(function (response) {
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

        }}> REGISTRO DE VOTANTES
        </Text>

        <View style={CSS.viewCardHome}>
        <Text style={CSS.asterisco}>*</Text>
        <Text style={CSS.asterisco1}>Nombre</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"

        />
        <View style={CSS.viewCardHome}>
        <Text style={CSS.asterisco}>*</Text>
        <Text style={CSS.asterisco1}>Apellido</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"

        />
        <View style={CSS.viewCardHome}>
        <Text style={CSS.asterisco}>*</Text>
        <Text style={CSS.asterisco1}>Cedula</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"

        />
        <View style={CSS.viewCardHome}>
        <Text style={CSS.asterisco}>*</Text>
        <Text style={CSS.asterisco1}>Telefono</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"

        />
        <View style={CSS.viewCardHome}>
        <Text style={CSS.asterisco}>*</Text>
        <Text style={CSS.asterisco1}>Correo</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"

          placeholderTextColor="#132196"
          autoCapitalize="none"

        />
        <View style={CSS.viewCardHome}>
        <Text style={CSS.asterisco}>*</Text>
        <Text style={CSS.asterisco1}>Ciudad</Text>
        </View>
        <RNPickerSelect
                  style={CSS.select}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeScript", value: "TypeScript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             />
        <View style={CSS.viewCardHome}>
        <Text style={CSS.asterisco}>*</Text>
        <Text style={CSS.asterisco1}>Departamento</Text>
        </View>
        <RNPickerSelect
                  style={CSS.select}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeScript", value: "TypeScript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             />
        <View style={CSS.viewCardHome}>
        <Text style={CSS.asterisco}>*</Text>
        <Text style={CSS.asterisco1}>Mesa de votacion</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"

        />
        <View style={CSS.viewCardHome}>
        <Text style={CSS.asterisco}>*</Text>
        <Text style={CSS.asterisco1}>Partido</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"

        />
        <View style={CSS.viewCardHome}>
        <Text style={CSS.asterisco}>*</Text>
        <Text style={CSS.asterisco1}>Candidato</Text>
        </View>
        <TextInput style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"

        />

        <Text style={CSS.pririodad}>
          Los campos con * es obligatorio
        </Text>

        <TouchableOpacity
          style={{
            ...CSS.siguiente,
            backgroundColor: '#132196'
          }}
          onPress={() => navigation.navigate({ routeName: 'Pagina2' })}
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

export default pagina1;