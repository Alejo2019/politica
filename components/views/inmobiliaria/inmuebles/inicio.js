import React from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,Alert
} from 'react-native';
import { images, COLORS, CSS } from "../../../../constants";


function inicio(props) {
  
  let { navigation } = props;

  return (
    
    <View style={CSS.homeContainer}>
  
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
      <View style={CSS.containerHome}>
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
                marginTop: hp('10%'),
                marginBottom: hp('10'),
                fontSize: hp('4%'),
                textAlign: 'center',
                color: '#132196',
                fontWeight: 'bold'

            }}> Hola, bienvenido!
            </Text>

            <TouchableOpacity
                style={{...CSS.botonGrande,
                    backgroundColor: '#132196'
                }}
                onPress={() => navigation.navigate({ routeName: 'Pagina1' })}
            >
                <Text style={CSS.botonGrandeTexto}>REGISTRO DE VOTANTES</Text>
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
                onPress={() => navigation.navigate('Pagina3Screen')}
            >
                <Text style={CSS.botonGrandeTexto}>VISUALIZAR VOTANTES</Text>
            </TouchableOpacity>


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
      </View>
    </View >
  );
};

export default inicio;