import React, { useEffect, useState, Fragment } from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
//import RNPickerSelect from "react-native-picker-select";
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
import { List } from 'react-native-paper';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

function pagina3(props) {

  let { navigation } = props;

  const [token, setToken] = useState("");
  const [comuna, setComuna] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getToken();
    getCiudad();
    getComuna();
  }, []);

  const getToken = async () => {
    try {
      let valor = await AsyncStorage.getItem('token');
      setToken(valor);
    } catch (error) {
      console.log(error)
    }
  };

  const getCiudad = async () => {
    try {
      let value = await AsyncStorage.getItem('ciudad');
      setCiudad(value);
    } catch (error) {
      console.log(error)
    }
  };

  const getComuna = async () => {
    try {
      let value = await AsyncStorage.getItem('comuna');
      setComuna(value);
    } catch (error) {
      console.log(error)
    }
  };

  const getData = async () => {
    axios.get('http://52.55.26.143:8060/api/e14', {
      headers: {
        'x-token': `${token}`
      }
    })
      .then((response) => {
        console.log(response.data.e14)
        setData(response.data.e14);
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  };

  console.log(token)
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
        <View style={CSS.cardHome} onPress={() => navigation.navigate('Pagina5E')}>
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 4, marginLeft: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    CIUDAD
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    CALI
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    COMUNA
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    6
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    MESA
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    26
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <TouchableOpacity
            style={{
              ...CSS.siguiente,
              backgroundColor: '#132196',
              width: wp('70%'),
              marginLeft: wp('-2%'),
              marginTop: hp('1%')
            }}
            onPress={() => getData()}

          >
            <Text style={CSS.siguientetext}>GENERAR</Text>
          </TouchableOpacity>
        </View>
        {data.map((dato, index) => (
          <List.Section>
            <List.Accordion title='Desplegable' titleStyle={{ color: COLORS.gray, fontWeight: 'bold' }}

              style={{ backgroundColor: COLORS.blue }}>
              <View style={CSS.cardHome}>
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
                          keyboardType="numeric">{dato.totalSufragantes}</Text>
                      </View>
                      <View style={{ alignSelf: 'center' }}>
                        <Text style={CSS.tituloHome1}
                          underlineColorAndroid="transparent"
                          placeholderTextColor="#132196"
                          autoCapitalize="none"
                          keyboardType="numeric">{dato.totalVotosUrna}</Text>
                      </View>
                      <View style={{ alignSelf: 'center' }}>
                        <Text style={CSS.tituloHome1}
                          underlineColorAndroid="transparent"
                          placeholderTextColor="#132196"
                          autoCapitalize="none"
                          keyboardType="numeric">{dato.totalVotosIncinerados}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View style={CSS.cardHome} >

                <View style={CSS.viewCardHome}>
                  <View style={{ flex: 2 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Image source={images.candidato1} style={{
                          ...CSS.HomeProviderimagen1, height: hp('10%'),
                          width: wp('50%')
                        }} />
                      </View>
                      <View style={{ alignSelf: 'center' }}>

                        <Text style={CSS.tituloHome6}
                          underlineColorAndroid="transparent"
                          placeholderTextColor="#132196"
                          autoCapitalize="none"
                          keyboardType="numeric"

                        >{dato.votacionCan1}</Text>
                      </View>
                    </View>
                  </View>
                </View>

              </View>
              <View style={CSS.cardHome} >

                <View style={CSS.viewCardHome}>
                  <View style={{ flex: 2 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Image source={images.candidato2} style={{
                          ...CSS.HomeProviderimagen1, height: hp('10%'),
                          width: wp('50%')
                        }} />
                      </View>
                      <View style={{ alignSelf: 'center' }}>

                        <Text style={CSS.tituloHome6}
                          underlineColorAndroid="transparent"
                          placeholderTextColor="#132196"
                          autoCapitalize="none"
                          keyboardType="numeric"

                        >{dato.votacionCan2}</Text>
                      </View>
                    </View>
                  </View>
                </View>

              </View>
              <View style={CSS.cardHome} >

                <View style={CSS.viewCardHome}>
                  <View style={{ flex: 2 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Image source={images.candidato3} style={{
                          ...CSS.HomeProviderimagen1, height: hp('10%'),
                          width: wp('50%')
                        }} />
                      </View>
                      <View style={{ alignSelf: 'center' }}>

                        <Text style={CSS.tituloHome6}
                          underlineColorAndroid="transparent"
                          placeholderTextColor="#132196"
                          autoCapitalize="none"
                          keyboardType="numeric"

                        >{dato.votacionCan3}</Text>
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
                        keyboardType="numeric">{dato.votosBlanco}</Text>
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
                        keyboardType="numeric">{dato.votosBlanco}</Text>
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
                        keyboardType="numeric">{dato.votosNoMarcados}</Text>
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
                        keyboardType="numeric">{dato.totalVotosMesa}</Text>
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
              </TouchableOpacity>
            </List.Accordion>
          </List.Section>
        )
        )
        }
      </ScrollView>
    </ImageBackground >
  );
};

export default pagina3;