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

function pagina4(props) {

  let { navigation } = props;
  const [isChecked, setChecked] = useState([]);
  useEffect(() => {
    //getDataUsingSimpleGetCall()
  }, []);

  const [data, setdata] = useState([]);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('http://3.236.142.25:8060/api/lider/622d1e86257755f652ff120e/tipo/SENADO')
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
      <ScrollView>

        
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
                >0</TextInput>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <TextInput style={CSS.tituloHome1}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={(value) => hableChangeText('totalSufragantes', value)}
                >0</TextInput>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <TextInput style={CSS.tituloHome1}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#132196"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onChangeText={(value) => hableChangeText('totalSufragantes', value)}
                >0</TextInput>
              </View>
            </View>
          </View>
        </View>
        

        <View style={{ paddingTop: hp('5%'), paddingHorizontal: wp('1%') }}>



          <DataTable >
              <View>
                <DataTable.Header>
                  <DataTable.Title >Nombre</DataTable.Title>
                  <DataTable.Title  >Cedula</DataTable.Title>
                  <DataTable.Title  >Si voto</DataTable.Title>
                </DataTable.Header>

                {data.map((dato, index) => (
                  <DataTable.Row >
                    <DataTable.Cell >{dato.nombres}</DataTable.Cell>
                    <DataTable.Cell > {dato.identificacion}</DataTable.Cell>
                    <DataTable.Cell > <Checkbox style={{ margin: 8 }} value={isChecked} onValueChange={setChecked} />  </DataTable.Cell>
                  </DataTable.Row>
                )
                )
                }


              </View>
          </DataTable>


        </View>
        <TouchableOpacity
          style={{
            ...CSS.siguiente,
            backgroundColor: '#132196',
            marginTop: hp('5%')
          }}

          onPress={() => navigation.navigate({ routeName: 'Generar' })}

        >
          <Text style={CSS.siguientetext}>GENERAR REPORTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...CSS.siguiente,
            backgroundColor: '#132196',
            
          }}

          onPress={() => navigation.navigate({ routeName: 'Congreso' })}

        >
          <Text style={CSS.siguientetext}>GUARDAR</Text>
        </TouchableOpacity>

      </ScrollView>

    </ImageBackground>
  );
};

export default pagina4;