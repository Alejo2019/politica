import React, { useEffect, useState, Fragment } from "react";
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
import { List } from 'react-native-paper';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

function pagina3(props) {

  let { navigation } = props;

  const [data, setData] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    getData();
    getToken();
  }, []);

  const getToken = async () => {
    try {
      let value = await AsyncStorage.getItem('token');
      setToken(value);
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
        //console.log(response.data.votante)
        setData(response.data.e14);
      console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
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
                    NUEMRO DE MESA
                  </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome}>
                    26
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
              
              
            </View>
          </View>
        </View>
        {data
                  .map((dato, index) => (
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
                        keyboardType="numeric">{data.totalSufragantes}</Text>
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
            </View>

            <View style={CSS.cardHome} >

              <View style={CSS.viewCardHome}>
                <View style={{ flex: 2 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View>
                      <Image source={images.candidato1} style={CSS.HomeProviderimagen} />
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                      <Text style={CSS.tituloHome5}>
                      Gustavo Petro
                      </Text>
                      <Text style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric"

                  >100</Text>
                    </View>
                  </View>
                </View>
              </View>

            </View>
            <View style={CSS.cardHome} >
     
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 2}}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.candidato2} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome5}>
                  Sergio Fajardo
                  </Text>
                  <Text style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric"

                  >100</Text>
                </View>
              </View>
            </View>
          </View>
  
        </View>
        <View style={CSS.cardHome} >
     
          <View style={CSS.viewCardHome}>
            <View style={{ flex: 2}}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Image source={images.candidato3} style={CSS.HomeProviderimagen} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={CSS.tituloHome5}>
                  Federico Gutiérrez
                  </Text>
                  <Text style={CSS.tituloHome6}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric"

                  >100</Text>
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