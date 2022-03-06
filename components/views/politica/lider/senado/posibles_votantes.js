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


function pagina7(props) {

  

  let { navigation } = props;
 

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

        }}> REGISTRO POSIBLES VOTANTES
        </Text>

        <View >
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Numero de cedula</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            keyboardType="numeric"
            onChangeText={(value) => hableChangeText('nombre', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Nombre</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('nombre', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Apellido</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('nombre', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Lugar de votación</Text>
          </View>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('nombre', value)}
          />
          <View style={CSS.viewCardHome}>
            <Text style={CSS.asterisco}>*</Text>
            <Text style={CSS.asterisco1}>Mesa de votación </Text>
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

            onPress={() => navigation.navigate({ routeName: 'Entes_territoriales' })}

          >
            <Text style={CSS.siguientetext}>GUARDAR</Text>
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

export default pagina7;