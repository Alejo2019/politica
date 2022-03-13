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
  Alert,
  StyleSheet

} from 'react-native';
import { Picker } from "@react-native-picker/picker";
//import { SearchBar } from 'react-native-elements';
import { images, COLORS, CSS } from "../../../../../constants";
import axios from "axios";

function pagina4(props) {

  let { navigation } = props;
  const [isChecked, setChecked] = useState([]);
  useEffect(() => {
    //getDataUsingSimpleGetCall()
  }, []);

  const [data, setdata] = useState([]);
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
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

  return (

    <ImageBackground source={images.fondo} style={CSS.Logincontainer}>





      <Text style={{
        marginBottom: hp('1'),
        fontSize: hp('3%'),
        textAlign: 'center',
        color: '#132196',
        fontWeight: 'bold',
        marginTop: hp('5%')


      }}> VOTANTES

      </Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignSelf: 'center' }}>
          <View style={{ ...CSS.input, width: wp('56%'), marginLeft: wp('10%'), marginRight: hp('5%') }}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196">
            <Picker
              onValueChange={(itemValue, itemIndex) => setCandidato(itemValue)}
              mode="dropdown" // Android only
              style={{ marginVertical: 10, padding: 10, borderWidth: 5, borderColor: "#666", }}
            >
              <Picker.Item label="Seleccione" value="Unknown" />
              <Picker.Item label="Candidato 1" value="Candidato 1" />
              <Picker.Item label="Candidato 2" value="Candidato 2" />
              <Picker.Item label="Candidato 3" value="Candidato 3" />

            </Picker>
          </View>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <TouchableOpacity
            style={{
              ...CSS.siguiente,
              backgroundColor: '#132196',
              width: wp('17%'),
              marginLeft: wp('-2%'),
              marginTop: hp('1%')

            }}

            onPress={console.log('Aqui va buscar')}

          >
            <Text style={CSS.siguientetext}>Buscar</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignSelf: 'center' }}>
          <View>
            <TextInput
              placeholder="Buscar cedula..."
              onChangeText={updateSearch}
              value={search}
              style={{ ...CSS.input, width: wp('56%'), marginLeft: wp('10%'), marginRight: hp('5%') }}
              underlineColorAndroid="transparent"
              placeholderTextColor="#132196"
              autoCapitalize="none"
              selectionColor="#132196"

            />

          </View>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <TouchableOpacity
            style={{
              ...CSS.siguiente,
              backgroundColor: '#132196',
              width: wp('17%'),
              marginLeft: wp('-2%'),
              marginTop: hp('1%')

            }}

            onPress={console.log('Aqui va buscar')}

          >
            <Text style={CSS.siguientetext}>Buscar</Text>
          </TouchableOpacity>
        </View>

      </View>






      <View style={{ paddingTop: hp('5%'), paddingHorizontal: wp('1%') }}>
        <ScrollView>



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

        </ScrollView>
      </View>

      <TouchableOpacity
        style={{
          ...CSS.siguiente,
          backgroundColor: '#132196',
          marginTop: hp('49%')

        }}

        onPress={() => navigation.navigate({ routeName: 'Congreso' })}

      >
        <Text style={CSS.siguientetext}>GUARDAR</Text>
      </TouchableOpacity>



    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    justifyContent: "center",
  },

});
export default pagina4;