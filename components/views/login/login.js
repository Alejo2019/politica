import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
//import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-picker/picker";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput, Modal, StyleSheet,
  TouchableOpacity, Alert, ActivityIndicator, ScrollView
} from 'react-native';
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { images, COLORS, CSS } from "../../../constants";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';

function Login(props) {
  let { navigation } = props;
  const [country, setCountry] = useState('Unknown');

  const [state, setState] = useState({
    correo: '',
    contraseña: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const hableChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value });
  }
  const [modalVisible, setModalVisible] = useState(false);

  const Validador = async (dispatch) => {
    setModalVisible(true);
    console.log(state);
    await axios
      .post('http://52.55.26.143:8060/api/auth/login', {
        "correo": (state.correo),
        "contraseña": (state.contraseña)
      }).then(function (response) {
        console.log(response.data);
        AsyncStorage.setItem('token', response.data.token);
        AsyncStorage.setItem('rol', response.data.usuario.rol);
        AsyncStorage.setItem('id', response.data.usuario.uid);
        AsyncStorage.setItem('user', JSON.stringify(response.data.usuario));
        AsyncStorage.setItem('partido', response.data.usuario.partido);
        AsyncStorage.setItem('comuna', response.data.usuario.comuna);
        AsyncStorage.setItem('ciudad', response.data.usuario.ciudad);
        if (response.data.usuario.rol === 'LIDER_ROLE') {
          navigation.navigate('Partido');
        } else if (response.data.usuario.rol === 'TESTIGO_ROLE') {
          navigation.navigate('Partido');
        } else {
          navigation.navigate('Partido');
        }
        setModalVisible(false);
      })
      .catch(function (error) {
        setModalVisible(false);
        setShowAlert(true);
      })
  };

  const hideAlert = (value) => {
    setShowAlert(value);
  };

  return (
    
    <ImageBackground source={images.fondo} style={CSS.Logincontainer}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ActivityIndicator size="large" color="#efb43b" />
            </View>
          </View>
        </Modal>
      </View>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Datos incorrectos"
        message="Usuario o contraseña incorrectos"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={false}
        cancelText="Cerrar"
        cancelButtonColor="#132196"
        onCancelPressed={() => {
          hideAlert(false);
        }}
      />
      <Image
        style={CSS.img}
        source={images.logo6}
      />
      <ScrollView>

        <View style={CSS.inputlogin1}>
          <Text style={CSS.inputlogin}>Usuario</Text>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('correo', value)}
          />

          <Text style={CSS.inputlogin}>Contraseña</Text>
          <TextInput style={CSS.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="#132196"
            autoCapitalize="none"
            secureTextEntry={true}
            selectionColor="#132196"
            onChangeText={(value) => hableChangeText('contraseña', value)}
          />
        </View>
        <View style={CSS.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#132196"
          autoCapitalize="none"
          selectionColor="#132196">
          <Picker
            selectedValue={country}
            onValueChange={(value, index) => setCountry(value)}
            mode="dropdown" // Android only
            style={{ marginVertical: 10, padding: 10, borderWidth: 5, borderColor: "#666", color: '#132196' }}
          >
            {/* <Picker.Item label="Seleccione el pais" value="Unknown" /> */}
            <Picker.Item label="Colombia" value="Colombia" />
            <Picker.Item label="Argentina" value="Argentina" />
            <Picker.Item label="Bolivia" value="Bolivia" />
            <Picker.Item label="Brasil" value="Brasil" />
            <Picker.Item label="Chile" value="Chile" />
            <Picker.Item label="Costa Rica" value="Costa Rica" />
            <Picker.Item label="Cuba" value="Cuba" />
            <Picker.Item label="Ecuador" value="Ecuador" />
            <Picker.Item label="El Salvador" value="El Salvador" />
            <Picker.Item label="Guatemala" value="Guatemala" />
            <Picker.Item label="Haití" value="Haití" />
            <Picker.Item label="Honduras" value="Honduras" />
            <Picker.Item label="México" value="México" />
            <Picker.Item label="Nicaragua" value="Nicaragua" />
            <Picker.Item label="Panamá" value="Panamá" />
            <Picker.Item label="Paraguay" value="Paraguay" />
            <Picker.Item label="Perú" value="Perú" />
            <Picker.Item label="República Dominicana" value="República Dominicana" />
            <Picker.Item label="Uruguay" value="Uruguay" />
            <Picker.Item label="Venezuela" value="Venezuela" />
          </Picker>
        </View>

        <View style={CSS.siguientecontainer}>
          <TouchableOpacity
            style={{
              ...CSS.siguiente1,
              backgroundColor: '#132196',
              marginLeft: hp('12.5%')
            }}
            onPress={() => Validador()}
          >
            <Text style={CSS.siguientetext}>INICIAR SESIÓN</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>


      
    </ImageBackground>

  );

}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Login