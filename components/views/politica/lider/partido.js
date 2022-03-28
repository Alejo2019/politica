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

function inicio(props) {

  let { navigation } = props;

  const Close = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate({ routeName: 'Auth' })
  }

  const cambioP = () => {
    const petro = 'petro';
    navigation.navigate({ routeName: 'Modulo', params: { petro } })
    console.log(petro)
  }

    const cambioF = () => {
    const fajardo = 'fajardo';
    navigation.navigate({ routeName: 'Modulo', params: { fajardo} })
    console.log(fajardo)
  }

  const cambioFG = () => {
    const fico = 'fico';
    navigation.navigate({ routeName: 'Modulo', params: { fico} })
    console.log(fico)
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
        <TouchableOpacity onPress={() => Close()}>

          <Icon name="location-exit" style={CSS.icon}
          />
        </TouchableOpacity>
        <Image
          style={CSS.img}
          source={images.logo2}
        />

        <TouchableOpacity style={CSS.cardHome} onPress={() =>cambioP()}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 2}}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.candidato1} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                   Gustavo Petro
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={CSS.cardHome} onPress={() =>cambioF()}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 2}}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.candidato2} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                   Sergio Fajardo
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={CSS.cardHome} onPress={() =>cambioFG()}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 2}}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.candidato3} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                   Federico Gutiérrez
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity style={CSS.cardHome} onPress={() => cambio()}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 3, marginLeft: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.partido2} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    PARTIDO LIBERAL
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity> */}

      </ScrollView>

    </ImageBackground>
  );
};

export default inicio;