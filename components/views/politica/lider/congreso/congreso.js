import React, { useEffect, useState } from "react";
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
import { images, COLORS, CSS } from "../../../../../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

function pagina1(props) {

  let { navigation } = props;
  let petro3 = navigation.state.params.petro2;
  let fajardo3 = navigation.state.params.fajardo2;
  let fico3 = navigation.state.params.fico3;

  console.log('pagina 3', petro3);
  console.log('pagina 3', fajardo3);
  console.log('pagina 3', fico3);



  return (

    <ImageBackground source={images.fondo} style={CSS.Logincontainer}>


      

      <ScrollView>
        

        
        <Image
          style={CSS.img}
          source={images.logo5}
        />

        <Text style={{
          marginTop: hp('3%'),
          marginBottom: hp('4'),
          fontSize: hp('3%'),
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}> CAMPAÑA PRESIDENCIAL
        </Text>

        <View >
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'Posibles_votantes', params: { petro3, fajardo3, fico3 } })}
          >
            <Text style={CSS.siguientetext}>REGISTRO POSIBLES VOTANTES</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity

            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'Metas', params: { petro3, fajardo3, fico3 } })}
          >
            <Text style={CSS.siguientetext}>REGISTRO METAS POR LÍDER</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'Registro', params: { petro3, fajardo3, fico3 } })}
          >
            <Text style={CSS.siguientetext}>REGISTRO DE VOTOS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'Reporte', params: { petro3, fajardo3, fico3 } })}
          >
            <Text style={CSS.siguientetext}>REPORTE Y CONSULTA</Text>
          </TouchableOpacity>
        </View>


        
      </ScrollView>

    </ImageBackground>
  );
};

export default pagina1;