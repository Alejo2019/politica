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


function pagina2(props) {

  let { navigation } = props;

  const [token, setToken] = useState("");

  useEffect(() => {
    getToken()
  }, []);

  const getToken = async () => {
    try {
      let value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (error) {
      console.log(error)
    }
  };

  const [state, setState] = useState({
    totalSufragantes: '',
    totalVotosUrna: '',
    totalVotosIncinerados: '',
    telefono: '',
    correo: '',
    mesa: '',
    partido: '',
    candidato: '',
  });

  const hableChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value });
  }

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
        <List.Section>
          <List.Accordion title='Desplegable' titleStyle={{ color: COLORS.gray, fontWeight:'bold' }}
            left={props => <List.Icon {...props} icon="shower" color={COLORS.gray} />}
            style={{ backgroundColor: COLORS.blue }}>
            <View style={CSS.cardHome} onPress={() => navigation.navigate('Pagina3E')}>
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
            </View>
          </List.Accordion>
        </List.Section>

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

                  />
                </View>
                <View style={{ alignSelf: 'center' }}>
                  <TextInput style={CSS.tituloHome1}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#132196"
                    autoCapitalize="none"
                    keyboardType="numeric"

                  />
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
                    CANDIDATO 1
                  </Text>
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
        </View>

        <TouchableOpacity
          style={{
            ...CSS.siguiente,
            backgroundColor: '#132196'
          }}

          onPress={() => navigation.navigate('Pagina1E')}

        >
          <Text style={CSS.siguientetext}>FINALIZAR</Text>
        </TouchableOpacity>

      </ScrollView>
    </ImageBackground>
  );
};

export default pagina2;