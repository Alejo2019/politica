
import React, { useEffect, useState, Fragment } from "react";
import Checkbox from 'expo-checkbox';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
  StyleSheet,
  FlatList,
} from 'react-native';
import { Picker } from "@react-native-picker/picker";
//import { SearchBar } from 'react-native-elements';
import { images, COLORS, CSS } from "../../../../../constants";
import axios from "axios";

function pagina4(props) {

  let { navigation } = props;
  const [isChecked, setChecked] = useState([]);
  useEffect(() => {
    getToken();
    getDatos()
  }, []);

  const [page, setPage] = React.useState(0);
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;
  const itemsPerPage = 10;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [puesto, setPuesto] = useState([])
  const [token, setToken] = useState("");
  const [identificacion, setidentificacion] = useState("");
  const [id, setId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cedula, setCedula] = useState([])
  const updateSearch = (search) => {
    setSearch(search);
  };


  let petro4 = navigation.state.params.petro3;
  let fajardo4 = navigation.state.params.fajardo3;
  let fico4 = navigation.state.params.fico3;
  console.log(petro4);
  console.log(fajardo4);
  console.log(fico4);

  console.log(identificacion)
  const getDatos = async () => {
    axios.get(`http://52.55.26.143:8060/api/lider/624fc2c450c2f6b858c8d753/tipo/SENADO`, {
      headers: {
        'x-token': `${token}`
      }
    })
      .then((response) => {
        //console.log(response.data.votante)
        setData(response.data.votantes);
        //setId(response.data.votante._id)
      })
      .catch((error) => {
        console.error(error)
      })
  };

  const getCedula = async () => {
    axios.get(`http://52.55.26.143:8060/api/votantes/cedula/${identificacion}`, {
      headers: {
        'x-token': `${token}`
      }
    })
      .then((response) => {
        //console.log(response.data.votante)
        setCedula(response.data.votantes);
        console.log(cedula)
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

  const update = async () => {
    try {
      axios.put(`http://http://52.55.26.143:8060/api/votos/${id}/tipo/SENADO`, {
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
    identificacion: ''
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

      <ScrollView >
        <View style={{ paddingTop: hp('5%'), paddingHorizontal: wp('1%') }}>



          <ScrollView>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ ...CSS.tituloHome, marginRight: wp('20%'), }}>
                  Nombre
                </Text>
              </View>
              <View style={{ alignSelf: 'center', marginRight: wp('20%') }}>
                <Text style={CSS.tituloHome}>
                  Cedula
                </Text>
              </View>
              {/* <View style={{ alignSelf: 'center' }}>
                <Text style={CSS.tituloHome}>
                  ¿Voto?
                </Text>
                
                
              </View> */}
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View>
                {
                data
                  .map((dato, index) => (
                    <Text style={CSS.tituloHome}>
                      {dato.nombres}
                    </Text>
                  )
                  )
                }
              </View>
              <View>
                {data
                  .map((dato, index) => (
                    <Text style={CSS.tituloHome}>
                      {dato.identificacion}
                    </Text>
                  )
                  )
                }
              </View>
              {/* <View>
                {data
                  .map((dato, index) => (
                    <Text style={{...CSS.tituloHome, marginLeft: wp('15%'), marginTop:1}}>
                      <Checkbox style={{ margin: 10 }} value={isChecked} onValueChange={setChecked}/>
                    </Text>
                  )
                  )
                }
              </View> */}
            </View>
          </ScrollView>



        </View>


        <TouchableOpacity
          style={{
            ...CSS.siguiente,
            backgroundColor: '#132196',
            marginTop: hp('49%')

          }}

          onPress={() => update()}

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