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



const optionsPerPage = [2, 3, 4];
function pagina4(props) {

  let { navigation } = props;
  const [isChecked, setChecked] = useState(false);
  useEffect(() => {
    getDataUsingSimpleGetCall()
  }, []);

  const [data, setdata] = useState([]);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('http://http://52.55.26.143:8060api/votantes')
      .then(function (response) {
        // handle success
        setdata(response.data.votantes);
        console.log(response.data.votantes)
      })

  };
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
        <TouchableOpacity >
          <Icon name="book" style={CSS.pdf} />
        </TouchableOpacity>

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
                    <DataTable.Cell >{dato.nombre}</DataTable.Cell>
                    <DataTable.Cell > {dato.cedula}</DataTable.Cell>
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

          onPress={() => navigation.navigate({ routeName: 'Congreso' })}

        >
          <Text style={CSS.siguientetext}>GUARDAR</Text>
        </TouchableOpacity>

      </ScrollView>

    </ImageBackground>
  );
};

export default pagina4;