import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import RNPickerSelect from "react-native-picker-select";
import Checkbox from 'expo-checkbox';
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

function generar_reporte(props) {

  let { navigation } = props;
  const [isChecked, setChecked] = useState(false);
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
  const data1 = {
    nombre: 'nicolas',
    apellido: 'arenas',
    correo: 'nicola@arenas.com'
  }
  return (

    <ImageBackground source={images.fondo} style={CSS.Logincontainer}>



      <Image
        style={{
          ...CSS.HomeProviderimagen,
          marginLeft: wp('70%')
        }}
        source={images.partido1}
      />
      <Image
        style={CSS.img}
        source={images.logo2}
      />

      <Text style={{
        marginBottom: hp('3'),
        fontSize: hp('3%'),
        textAlign: 'center',
        color: '#132196',
        fontWeight: 'bold',
        marginTop: hp('-7%')

      }}>REGISTRO DE VOTANTES


      </Text>
      <View style={CSS.cardHome} onPress={() => navigation.navigate('Pagina3E')}>
        <View style={CSS.viewCardHome}>
          <View style={{ flex: 4, marginLeft: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome}>
                  Nombre
                </Text>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome}>
                  gabriel
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: wp('30%'),
                  height: hp('3%'),
                  backgroundColor: 'red',
                  //borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  backgroundColor: '#132196',
                  marginLeft: wp('27%')

                }}

                onPress={() => navigation.navigate({ routeName: 'Reporte' })}

              >
                <Text style={{
                  color: 'white',
                  fontSize: hp('1.5%'),
                  fontWeight: 'bold'
                }}>VOLVER</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome}>
                  Apellido
                </Text>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome}>
                  lozano
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome}>
                  Cedula
                </Text>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome}>
                  11122223233
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome}>
                  Correo
                </Text>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome}>
                  gabriel@lozano.com
                </Text>
              </View>




            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <DataTable >
          <DataTable.Header>
            <DataTable.Title >Nombre</DataTable.Title>
            <DataTable.Title  >Cedula</DataTable.Title>
            <DataTable.Title  >Si voto</DataTable.Title>
          </DataTable.Header>

          {data.map((dato, index) => (
            <DataTable.Row >
              <DataTable.Cell >{dato.nombre}</DataTable.Cell>
              <DataTable.Cell > {dato.cedula}</DataTable.Cell>
              <DataTable.Cell > <Checkbox style={{ margin: 8 }} value={isChecked} onValueChange={setChecked} />  </DataTable.Cell>
            </DataTable.Row>
          )
          )
          }
        </DataTable>

      </ScrollView>

    </ImageBackground>
  );
};

export default generar_reporte;