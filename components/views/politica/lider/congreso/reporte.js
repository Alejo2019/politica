import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import RNPickerSelect from "react-native-picker-select";
import Checkbox from 'expo-checkbox';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    getPuesto()
    setPage(0);
    getToken()
  }, [itemsPerPage]);

  const optionsPerPage = [2, 3, 4];
  const [page, setPage] = React.useState<number>(0);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [puesto, setPuesto] = useState([])
  const [token, setToken] = useState("");
  const [identificacion, setidentificacion] = useState("");
  const [id, setId] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  // const getDataUsingSimpleGetCall = () => {
  //   axios
  //     .get('http://44.200.184.156:8060api/lider/622d1e86257755f652ff120e/tipo/SENADO')
  //     .then(function (response) {
  //       // handle success
  //       setdata(response.data.votantes);
  //       console.log(response.data.votantes)
  //     })
  // };

  const getPuesto = () => {
    axios
      .get('http://44.200.184.156:8060/api/puestos')
      .then(function (response) {
        // handle success
        setPuesto(response.data.Puestos);
        console.log(response.data.Puestos)
      })
  };

  console.log(identificacion)

  const getCedula = async () => {
    axios.get(`http://44.200.184.156:8060/api/votantes/cedula/${identificacion}`, {
      headers: {
        'x-token': `${token}`
      }
    })
      .then((response) => {
        //console.log(response.data.votante)
        setData([response.data.votante]);
        setId(response.data.votante._id)
      })
      .catch((error) => {
        console.error(error)
      })
  };

  const getToken = async () => {
    try {
      let value = await AsyncStorage.getItem('token');
      setToken(value);
    } catch (error) {
      console.log(error)
    }
  };

  const update= async () => {
    try {
      axios.put(`http://44.200.184.156:8060/api/votos/${id}/tipo/SENADO`, {
        headers: {
          'x-token': `${token}`
        }
      })
        .then((response) => {
          //console.log(response.data.votante)
          setData([response.data.votante]);
          setId(response.data.votante._id)
        })
        .catch((error) => {
          console.error(error)
        })
    } catch (error) {
      console.log(error)
    }
    navigation.navigate({ routeName: 'Congreso' })
  };

  const hableChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value });
  }

  const [state, setState] = useState({
    identificacion:''
  });


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
          <View>
            <TextInput
              placeholder="Buscar cedula..."
              onChangeText={newText => setidentificacion(newText)}
              defaultValue={identificacion}
              style={{ ...CSS.input, width: wp('56%'), marginLeft: wp('10%'), marginRight: hp('5%') }}
              underlineColorAndroid="transparent"
              placeholderTextColor="#132196"
              autoCapitalize="none"
              selectionColor="#132196"
              keyboardType="numeric"
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
            onPress={() => getCedula()}

          >
            <Text style={CSS.siguientetext}>Buscar</Text>
          </TouchableOpacity>
        </View>

      </View>

<ScrollView>
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
                <DataTable.Cell > {dato.nombres}</DataTable.Cell>
                <DataTable.Cell > {dato.identificacion}</DataTable.Cell>
                <DataTable.Cell > <Checkbox style={{ margin: 8 }} value={isChecked} onValueChange={setChecked} />  </DataTable.Cell>
              </DataTable.Row>
            )
            )
            }

          </View>
          <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
        </DataTable>

      </View>


      <TouchableOpacity
        style={{
          ...CSS.siguiente,
          backgroundColor: '#132196',
          marginTop: hp('49%')

        }}

        onPress={() =>update()}

      >
        <Text style={CSS.siguientetext}>GUARDAR</Text>
      </TouchableOpacity>
      </ScrollView>



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