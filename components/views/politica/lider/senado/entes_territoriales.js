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
  let partido = navigation.state.params.partido;
  console.log('pagina 3',partido);


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
          marginBottom: hp('4'),
          fontSize: hp('3%'),
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}> ENTES TERRITORIALES
        </Text>

        <View >
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'Posibles_votantesI' })}
          >
            <Text style={CSS.siguientetext}>REGISTRO POSIBLES VOTANTES</Text>
          </TouchableOpacity>
          <TouchableOpacity

            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate('Posibles_votantesI')}
          >
            <Text style={CSS.siguientetext}>REGISTRO METAS POR LIDER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'RegistroI', params: { partido } })}
          >
            <Text style={CSS.siguientetext}>REGISTRO DE VOTOS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate('ReporteI')}
          >
            <Text style={CSS.siguientetext}>REPORTE Y CONSULTA</Text>
          </TouchableOpacity>

        </View>


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