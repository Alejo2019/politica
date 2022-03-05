import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DataTable } from 'react-native-paper';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Alert

} from 'react-native';
import { images, COLORS, CSS } from "../../../../../constants";
import axios from "axios";

function pagina4(props) {

  let { navigation } = props;

  useEffect(() => {
    getDataUsingSimpleGetCall()
  }, []);

  const [data, setdata] = useState([]);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://service-servicios.herokuapp.com/api/votantes')
      .then(function (response) {
        // handle success
        setdata(response.data.votantes);
        console.log(response.data.votantes)
      })

  };
  //console.log(data)
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
          marginBottom: hp('1'),
          fontSize: hp('3%'),
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}> VOTANTES A LA CAMARA

        </Text>

        <View style={{ ...CSS.viewCardHome, marginTop: hp('5%') }}>
          <View style={{ flex: 3, alignItems: 'center' }}>


            <View style={{ flexDirection: 'row' }}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome4}>
                  META
                </Text>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome4}>
                  VOTOS SI
                </Text>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome4}>
                  VOTOS NO
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
                >30</TextInput>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <TextInput style={CSS.tituloHome1}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={(value) => hableChangeText('totalSufragantes', value)}
                >30</TextInput>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <TextInput style={CSS.tituloHome1}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={(value) => hableChangeText('totalSufragantes', value)}
                >30</TextInput>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity >
          <Icon name="book" style={CSS.pdf}/>
        </TouchableOpacity>
        <View style={{ paddingTop: hp('5%'), paddingHorizontal: wp('3%'), }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Nombre</DataTable.Title>
              <DataTable.Title>Cedula</DataTable.Title>
              <DataTable.Title>Ciudad</DataTable.Title>
              <DataTable.Title >¿Votos?</DataTable.Title>
            </DataTable.Header>



            <DataTable.Row>

              {/* <DataTable.Cell >{dato.nombre}</DataTable.Cell>
                <DataTable.Cell >{dato.cedula}</DataTable.Cell>
                <DataTable.Cell >{dato.lugar}</DataTable.Cell>
                <DataTable.Cell >{dato.zona}</DataTable.Cell> */}
              <DataTable.Cell >luis</DataTable.Cell>
              <DataTable.Cell >Candidato</DataTable.Cell>
              <DataTable.Cell >30</DataTable.Cell>
              <DataTable.Cell >3</DataTable.Cell>



            </DataTable.Row>


          </DataTable>
        </View>
        <TouchableOpacity
          style={{
            ...CSS.siguiente,
            backgroundColor: '#132196',
            marginTop: hp('5%')
          }}

          onPress={() => navigation.navigate({ routeName: 'Pagina1' })}

        >
          <Text style={CSS.siguientetext}>GUARDAR</Text>
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

    </ImageBackground>
  );
};

export default pagina4;