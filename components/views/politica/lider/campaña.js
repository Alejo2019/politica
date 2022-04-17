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
import { images, COLORS, CSS } from "../../../../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

function inicio2(props) {

  let { navigation } = props;
  let petro2 = navigation.state.params.petro1;
  let fajardo2 = navigation.state.params.fajardo1;
  let fico2 = navigation.state.params.fico1;

  console.log('paginac', petro2);
  console.log('paginac', fajardo2);
  console.log('paginac', fico2);


  const Close = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate({ routeName: 'Auth' })
  }

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
          fontSize: hp('4%'),
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}> Hola, bienvenido!
        </Text>

        <View >
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'Congreso', params: { petro2, fajardo2, fico2 } })}
          >
            <Text style={CSS.siguientetext}>CAMPAÑA PRESIDENCIAL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: '' })}
          >
            <Text style={CSS.siguientetext}>CONGRESO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: '' })}
          >

            <Text style={CSS.siguientetext}>ENTES TERRITORIALES</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>

    </ImageBackground>
  );
};

export default inicio2;