import React, { useEffect, useState } from "react";
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List } from 'react-native-paper';
import axios from "axios";

function pagina2(props) {

  let { navigation } = props;

  const [token, setToken] = useState("");
  const [comuna, setComuna] = useState("");
  const [ciudad, setCiudad] = useState("");


  useEffect(() => {
    getToken()
    getCiudad()
    getComuna()
  }, []);

  const getToken = async () => {
    try {
      let value = await AsyncStorage.getItem('token');
      setToken(value);
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

  const [state, setState] = useState({
    mesa: '',
    totalSufragantes: '',
    totalVotosUrna: '',
    totalVotosIncinerados: '',
    votacionCan1: '',
    votacionCan2: '',
    votacionCan3: '',
    votosBlanco: '',
    votosNulos: '',
    votosNoMarcados: '',
    totalVotosMesa: ''
  });
  console.log(state)
  const hableChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value });
  }

  const envio = () => {
    axios
      .post('http://52.55.26.143:8060/api/e14', {
        "mesa": (state.mesa),
        "totalSufragantes": (state.totalSufragantes),
        "totalVotosUrna": (state.totalVotosUrna),
        "totalVotosIncinerados": (state.totalVotosIncinerados),
        "votacionCan1": (state.votacionCan1),
        "votacionCan2": (state.votacionCan2),
        "votacionCan3": (state.votacionCan3),
        "votosBlanco": (state.votosBlanco),
        "votosNulos": (state.votosNulos),
        "votosNoMarcados": (state.votosNoMarcados),
        "totalVotosMesa": (state.totalVotosMesa)
      }, {
        headers: {
          'x-token': token
        }
      }).then(function (response) {
        // handle success
        (JSON.stringify(response));
        console.log((response))
        alert("Resgistro Existoso!")
      })
      .catch(function (error) {
        // handle error
        alert("Ha ocurrido un error, verifica los datos!");
        console.log(error.message)
      });
    navigation.navigate({ routeName: 'Pagina1E' })
  };

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
        <View style={CSS.cardHome} onPress={() => navigation.navigate('Pagina3E')}>
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
                    Cali
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
                    16
                  </Text>
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
                    MESA
                  </Text>

                </View>
                <TextInput style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric" />
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
                    COMUNA:
                  </Text>

                </View>
                <TextInput style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"

                />
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
                    NUMERO DE MESA:
                  </Text>

                </View>
                <TextInput style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={(value) => hableChangeText('mesa', value)}
                />
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
                    LUGAR:
                  </Text>

                </View>
                <TextInput style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"

                />
              </View>
            </View>
          </View>
        </View>
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
                  <TextInput style={CSS.tituloHome1}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={(value) => hableChangeText('totalSufragantes', value)}
                  />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <TextInput style={CSS.tituloHome1}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={(value) => hableChangeText('totalVotosUrna', value)}
                  />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <TextInput style={CSS.tituloHome1}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={(value) => hableChangeText('totalVotosIncinerados', value)}
                  />
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
                  <Image source={images.candidato1} style={{...CSS.HomeProviderimagen1,height: hp('10%'),
        width: wp('50%')}} />
                </View>
                <View style={{ alignSelf: 'center' }}>

                  <TextInput style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={(value) => hableChangeText('votacionCan1', value)}

                  />
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
                  <Image source={images.candidato2} style={{...CSS.HomeProviderimagen1,height: hp('10%'),
        width: wp('50%')}} />
                </View>
                <View style={{ alignSelf: 'center' }}>

                  <TextInput style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={(value) => hableChangeText('votacionCan2', value)}

                  />
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
                  <Image source={images.candidato3} style={{...CSS.HomeProviderimagen1,height: hp('10%'),
        width: wp('50%')}} />
                </View>
                <View style={{ alignSelf: 'center' }}>

                  <TextInput style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={(value) => hableChangeText('votacionCan3', value)}

                  />
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
                <TextInput style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={(value) => hableChangeText('votosBlanco', value)}

                />
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
                <TextInput style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={(value) => hableChangeText('votosNulos', value)}

                />
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
                <TextInput style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={(value) => hableChangeText('votosNoMarcados', value)}

                />
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
                <TextInput style={CSS.tituloHome6}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={(value) => hableChangeText('totalVotosMesa', value)}

                />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            ...CSS.siguiente,
            backgroundColor: '#132196'
          }}

          onPress={() => envio()}

        >
          <Text style={CSS.siguientetext}>FINALIZAR</Text>
        </TouchableOpacity>

      </ScrollView>
    </ImageBackground>
  );
};

export default pagina2;