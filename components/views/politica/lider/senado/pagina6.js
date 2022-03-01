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

function pagina6(props) {

  let { navigation } = props;

  useEffect(() => {
    getDataUsingSimpleGetCall()
  }, []);

  const [data, setdata] = useState([]);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('http://192.168.0.118:8060/api/users')
      .then(function (response) {
        // handle success
        setdata(response.data.usuarios);
        console.log(response.data.usuarios)
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
          marginTop: hp('3%'),
          marginBottom: hp('1'),
          fontSize: hp('3%'),
          textAlign: 'center',
          color: '#132196',
          fontWeight: 'bold'

        }}>TESTIGOS A ENTES TERRITORIALES
        </Text>
        <View style={{ paddingTop: hp('5%'), paddingHorizontal: wp('3%'), }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Nombre</DataTable.Title>
              <DataTable.Title>Candidato</DataTable.Title>
              <DataTable.Title >Lugar</DataTable.Title>
              <DataTable.Title >Mesa</DataTable.Title>
            </DataTable.Header>


            {data.map((dato, index) => (
              <DataTable.Row>

                <DataTable.Cell >{dato.nombre}</DataTable.Cell>
                <DataTable.Cell >{dato.candidato}</DataTable.Cell>
                <DataTable.Cell >{dato.partido}</DataTable.Cell>
                <DataTable.Cell >{dato.mesa}</DataTable.Cell>

              </DataTable.Row>

            )
            )
            }


          </DataTable>
        </View>

        <TouchableOpacity
          style={{
            ...CSS.siguiente,
            backgroundColor: '#132196',
            marginTop: hp('5%')
          }}

        >
          <Text style={CSS.siguientetext}>GENERAR REPORTE</Text>
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

export default pagina6;