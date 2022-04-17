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
  let petro1 = navigation.state.params.petro;
  let fajardo1 = navigation.state.params.fajardo;
  let fico1 = navigation.state.params.fico;
  console.log('pagina 1', petro1);
  console.log('pagina 1', fajardo1);
  console.log('pagina 1', fico1);
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
            onPress={() => navigation.navigate({ routeName: 'Campaña', params: { petro1, fajardo1, fico1 } })}
          >
            <Text style={CSS.siguientetext}>Monitoreo electoral</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'Pagina1E' })}
          >
            <Text style={CSS.siguientetext}>Testigos electorales</Text>
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

export default inicio2;