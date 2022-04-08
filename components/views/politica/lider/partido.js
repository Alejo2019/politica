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
    navigation.navigate({ routeName: 'Modulo', params: { fajardo } })
    console.log(fajardo)
  }

  const cambioFG = () => {
    const fico = 'fico';
    navigation.navigate({ routeName: 'Modulo', params: { fico } })
    console.log(fico)
  }
  return (

    <ImageBackground source={images.fondo} style={CSS.Logincontainer}>

     
      <TouchableOpacity onPress={() => Close()}>

        <Icon name="location-exit" style={CSS.icon}
        />
      </TouchableOpacity>
      <ScrollView>




        <Image
          style={{ ...CSS.img, marginTop: hp('-10') }}
          source={images.logo2}
        />

        <TouchableOpacity style={CSS.cardHome} onPress={() => cambioP()}>
          <View style={CSS.viewCardHome}>
            <View>
              <Image source={images.candidato1} style={{...CSS.HomeProviderimagen,height: hp('50%'),
        width: wp('100%'), }} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={CSS.cardHome} onPress={() => cambioF()}>
          <View style={CSS.viewCardHome}>
            <View>
              <Image source={images.candidato2} style={{...CSS.HomeProviderimagen,height: hp('50%'),
        width: wp('100%'), }} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={CSS.cardHome} onPress={() => cambioFG()}>
          <View style={CSS.viewCardHome}>


            <Image source={images.candidato3} style={{...CSS.HomeProviderimagen,height: hp('50%'),
        width: wp('100%'), }} />
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

    </ImageBackground >
  );
};

export default inicio;