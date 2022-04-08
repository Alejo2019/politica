import React from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity, Alert
} from 'react-native';
import { images, COLORS, CSS } from "../../../../../constants";


function pagina8(props) {

  let { navigation } = props;
  Validador1 = async () => {
    navigation.navigate('Login');
  };


  let petro4 = navigation.state.params.petro3;
  let fajardo4 = navigation.state.params.fajardo3;
  let fico4 = navigation.state.params.fico3;
  console.log(petro4);
  console.log(fajardo4);
  console.log(fico4);

  return (

    <ImageBackground source={images.fondo} style={CSS.Logincontainer}>




      <ScrollView>



        <Image
          style={{
            ...CSS.img, height: hp('30%'),
            width: wp('50%'), marginLeft: wp('28%'),
            marginBottom: hp('-5%'),
          }}
          source={images.logo6}
        />

        <Text style={{
          marginTop: hp('3%'),
          marginBottom: hp('4'),
          fontSize: hp('3%'),
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}> REGISTRO DE METAS POR LIDER
        </Text>

        <View >
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Votos prometidos </Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            keyboardType="numeric"
            onChangeText={(value) => hableChangeText('nombre', value)}
          />


          <Text style={CSS.pririodad}>
            Los campos con * es obligatorio
          </Text>


          <TouchableOpacity
            style={{
              ...CSS.siguiente,
              backgroundColor: '#132196'
            }}

            onPress={() => navigation.navigate({ routeName: 'Congreso' })}

          >
            <Text style={CSS.siguientetext}>GUARDAR</Text>
          </TouchableOpacity>

        </View>



      </ScrollView>

    </ImageBackground>
  );
};

export default pagina8;