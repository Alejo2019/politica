import React from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert

} from 'react-native';
import { images, COLORS, CSS } from "../../../../constants";
import { Picker } from "@react-native-picker/picker";


function pagina3(props) {

  let { navigation } = props;

  return (
    < ImageBackground source={images.fondo} style={CSS.Logincontainer} >


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
        <TouchableOpacity style={CSS.cardHome} onPress={() => navigation.navigate('Pagina5E')}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 4, marginLeft: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    DEPARTAMENTO
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    12 - CESAR
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    MUNICIPIO
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    180 - BECERRIL
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    LUGAR DE PUESTO
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    CABECERA MUNICIPAL
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    ZONA
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    80
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    PUESTO
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    00
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    MESA
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    003
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* <View style={CSS.cardHome}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome2}>
                    TOTAL
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome2}>
                    TOTAL
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome2}>
                    TOTAL
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome3}>
                    SUFRAGANTES
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome3}>
                    VOTOS
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome3}>
                    VOTOS
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome4}>
                    FORMATO E-11
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome4}>
                    EN LA URNA
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome4}>
                    INCINERADOS
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome1}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric">520</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome1}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric">10</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome1}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric">400</Text>
                </View>
              </View>
            </View>
          </View>
        </View> */}

        {/* <View style={CSS.cardHome} >
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                </View>
                <View>
                  <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome5}>
                    CANDIDATO 1
                  </Text>
                  <Text style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric">405</Text>

                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={CSS.cardHome} >
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                </View>
                <View>
                  <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome5}>
                    CANDIDATO 2
                  </Text>
                  <Text style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric">588</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={CSS.cardHome} >
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                </View>
                <View>
                  <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome5}>
                    CANDIDATO 3
                  </Text>
                  <Text style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric">100</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={CSS.cardHome} >
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                </View>
                <View>
                  <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome5}>
                    CANDIDATO 4
                  </Text>
                  <Text style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric">900</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={CSS.cardHome} >
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                </View>
                <View>
                  <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome5}>
                    CANDIDATO 3
                  </Text>
                  <Text style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric">900</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={CSS.cardHome3}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 2, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome5}>
                    VOTO EN BLANCO:
                  </Text>

                </View>
                <Text style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric">900</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={CSS.cardHome3}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 3, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome5}>
                    VOTO NULOS:
                  </Text>

                </View>
                <Text style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric">900</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={CSS.cardHome3}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 2, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome5}>
                    VOTOS NO MARCADOS:
                  </Text>

                </View>
                <Text style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric">900</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={CSS.cardHome3}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 2, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={{
                    fontSize: hp('1.9%'),
                    width: wp('50%'),
                    color: '#132196',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    marginLeft: wp('3%')
                  }}>
                    TOTAL VOTOS EN LA MESA:
                  </Text>

                </View>
                <Text style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric">900</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            ...CSS.siguiente,
            backgroundColor: '#132196'
          }}

          onPress={() => navigation.navigate('Pagina1E')}

        >
          <Text style={CSS.siguientetext}>VOLVER</Text>
        </TouchableOpacity> */}

      </ScrollView>
    </ImageBackground>
  );
};

export default pagina3;