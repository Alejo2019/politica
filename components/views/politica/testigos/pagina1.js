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
        {/* <TouchableOpacity  onPress={() => Close()}>

          <Icon name="location-exit" style={CSS.icon}
          />
        </TouchableOpacity> */}
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