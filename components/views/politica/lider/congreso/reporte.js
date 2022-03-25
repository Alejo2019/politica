//React Native FlatList Pagination to Load More Data dynamically – Infinite List
//https://aboutreact.com/react-native-flatlist-pagination-to-load-more-data-dynamically-infinite-list/

//import React in our code
import React, {useState, useEffect} from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => getData(), []);

  const getData = () => {
    console.log('getData');
    setLoading(true);
    //Service to get the data from the server to render
    fetch('https://aboutreact.herokuapp.com/getpost.php?offset='
          + offset)
      //Sending the currect offset with get request
      .then((response) => response.json())
      .then((responseJson) => {
        //Successful response
        setOffset(offset + 1);
        //Increasing the offset for the next API call
        setDataSource([...dataSource, ...responseJson.results]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator
              color="white"
              style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          enableEmptySections={true}
          renderItem={ItemView}
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;
// import React, { useEffect, useState, Fragment } from "react";
// import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
// import RNPickerSelect from "react-native-picker-select";
// import Checkbox from 'expo-checkbox';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { DataTable } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Pagination from 'rc-pagination';

// import {
//   ScrollView,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   ImageBackground,
//   Alert,
//   StyleSheet,
//   FlatList,
// } from 'react-native';
// import { Picker } from "@react-native-picker/picker";
// //import { SearchBar } from 'react-native-elements';
// import { images, COLORS, CSS } from "../../../../../constants";
// import axios from "axios";

// function pagina4(props) {

//   let { navigation } = props;
//   const [isChecked, setChecked] = useState([]);
//   useEffect(() => {
//     getPuesto()
//     getToken();
//     getCedula()
//   }, []);

//   const [page, setPage] = React.useState(0);
//   const from = page * itemsPerPage;
//   const to = (page + 1) * itemsPerPage;
//   const itemsPerPage = 10;
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [puesto, setPuesto] = useState([])
//   const [token, setToken] = useState("");
//   const [identificacion, setidentificacion] = useState("");
//   const [id, setId] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const updateSearch = (search) => {
//     setSearch(search);
//   };
//   // const getDataUsingSimpleGetCall = () => {
//   //   axios
//   //     .get('http://http://52.55.26.143:8060api/lider/622d1e86257755f652ff120e/tipo/SENADO')
//   //     .then(function (response) {
//   //       // handle success
//   //       setdata(response.data.votantes);
//   //       console.log(response.data.votantes)
//   //     })
//   // };



//   const getPuesto = () => {
//     axios
//       .get('http://http://52.55.26.143:8060/api/puestos')
//       .then(function (response) {
//         // handle success
//         setPuesto(response.data.Puestos);
//         console.log(response.data.Puestos)
//       })
//   };

//   //console.log(identificacion)

//   const getCedula = async () => {
//     axios.get('http://52.55.26.143:8060/api/lider/622d5addc74d0b5b45bc9196/tipo/SENADO', {
//       headers: {
//         'x-token': `${token}`
//       }
//     })
//       .then((response) => {
//         //console.log(response.data.votante)
//         setData(response.data.votantes);
//         //setId(response.data.votante._id)
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   };

//   const getToken = async () => {
//     try {
//       let value = await AsyncStorage.getItem('token');
//       setToken(value);
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   const update = async () => {
//     try {
//       axios.put(`http://http://52.55.26.143:8060/api/votos/${id}/tipo/SENADO`, {
//         headers: {
//           'x-token': `${token}`
//         }
//       })
//         .then((response) => {
//           //console.log(response.data.votante)
//           setData([response.data.votante]);
//           setId(response.data.votante._id)
//         })
//         .catch((error) => {
//           console.error(error)
//         })
//     } catch (error) {
//       console.log(error)
//     }
//     navigation.navigate({ routeName: 'Congreso' })
//   };

//   const hableChangeText = (nombre, value) => {
//     setState({ ...state, [nombre]: value });
//   }

//   const [state, setState] = useState({
//     identificacion: ''
//   });

//   return (

//     <ImageBackground source={images.fondo} style={CSS.Logincontainer}>

//       {/* <Text style={{
//         marginBottom: hp('1'),
//         fontSize: hp('3%'),
//         textAlign: 'center',
//         color: '#132196',
//         fontWeight: 'bold',
//         marginTop: hp('5%')


//       }}> VOTANTES

//       </Text>


//       <View style={{ flexDirection: 'row' }}>
//         <View style={{ alignSelf: 'center' }}>
//           <View>
//             <TextInput
//               placeholder="Buscar cedula..."
//               onChangeText={newText => setidentificacion(newText)}
//               defaultValue={identificacion}
//               style={{ ...CSS.input, width: wp('56%'), marginLeft: wp('10%'), marginRight: hp('5%') }}
//               underlineColorAndroid="transparent"
//               placeholderTextColor="#132196"
//               autoCapitalize="none"
//               selectionColor="#132196"
//               keyboardType="numeric"
//             />

//           </View>
//         </View>
//         <View style={{ alignSelf: 'center' }}>
//           <TouchableOpacity
//             style={{
//               ...CSS.siguiente,
//               backgroundColor: '#132196',
//               width: wp('17%'),
//               marginLeft: wp('-2%'),
//               marginTop: hp('1%')
//             }}
//             onPress={() => getCedula()}

//           >
//             <Text style={CSS.siguientetext}>Buscar</Text>
//           </TouchableOpacity>
//         </View>

//       </View>

//       <ScrollView>
//         <View style={{ paddingTop: hp('5%'), paddingHorizontal: wp('1%') }}>


//           <Fragment>
//             {data
//               .map((dato, index) => (
//                 <><><Text>
//                   {dato.nombres}
//                 </Text><Text>
//                     {dato.identificacion}
//                   </Text></><Checkbox style={{ margin: 8 }} value={isChecked} onValueChange={setChecked} /></>

//               )
//               )
//             }

//           </Fragment>


//         </View>


//         <TouchableOpacity
//           style={{
//             ...CSS.siguiente,
//             backgroundColor: '#132196',
//             marginTop: hp('49%')

//           }}

//           onPress={() => update()}

//         >
//           <Text style={CSS.siguientetext}>GUARDAR</Text>
//         </TouchableOpacity>
//       </ScrollView>

//  */}

//     </ImageBackground>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0d0d0d",
//     alignItems: "center",
//     justifyContent: "center",
//   },

// });
// export default pagina4;