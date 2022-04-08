import React from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity, Alert
} from 'react-native';
import { images, COLORS, CSS } from "../../../../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

function pagina1(props) {

  let { navigation } = props;
  const Close = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate({ routeName: 'Auth' })
  }

  return (

    <ImageBackground source={images.fondo} style={CSS.Logincontainer}>

      

      <ScrollView>


        <Image
          style={CSS.img}
          source={images.logo2}
        />

        <Text style={{
          marginBottom: hp('4'),
          fontSize: hp('4%'),
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}> Hola, bienvenido!
        </Text>

        <View style={CSS.botonGrande2}>
          <TouchableOpacity
            style={{
              ...CSS.botonGrande,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'Pagina2E' })}
          >
            <Text style={CSS.botonGrandeTexto}>REGISTRO E14</Text>
          </TouchableOpacity>

          <Text style={{
            marginVertical: hp('1%')

          }}>
          </Text>

          <TouchableOpacity
            style={{
              ...CSS.botonGrande,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate('Pagina4E')}
          >
            <Text style={CSS.botonGrandeTexto}>VISUALIZAR REGISTRO</Text>
          </TouchableOpacity>
        </View>



      </ScrollView>

    </ImageBackground>
  );
};

export default pagina1;