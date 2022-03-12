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
  let partidoR2 = navigation.state.params.partidoR1;  
  let partidoL2 = navigation.state.params.partidoL1;

  console.log('paginac',partidoR2);
  console.log('paginac',partidoL2);

  const Close = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate({ routeName: 'Auth' })
  }

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
            onPress={() => navigation.navigate({ routeName: '' })}
          >
            <Text style={CSS.siguientetext}>CAMPAÑA PRESIDENCIAL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'Congreso', params: { partidoR2,partidoL2} })}
          >
            <Text style={CSS.siguientetext}>CONGRESO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...CSS.siguiente2,
              backgroundColor: '#132196'
            }}
            onPress={() => navigation.navigate({ routeName: 'Entes_territoriales', params: {partidoR2,partidoL2} })}
          >

            <Text style={CSS.siguientetext}>ENTES TERRITORIALES</Text>
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