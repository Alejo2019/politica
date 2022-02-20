import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, Text } from 'react-native';
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import Home from '../components/views/inmobiliaria/Home';
import Iniciov1screen from '../components/views/inmobiliaria/inmuebles/inicio';
import Pagina1screen from '../components/views/inmobiliaria/inmuebles/pagina1';
import Pagina2screen from '../components/views/inmobiliaria/inmuebles/pagina2';
import Pagina3screen from '../components/views/inmobiliaria/inmuebles/pagina3';
import Pagina1vscreen from '../components/views/inmobiliaria/inmuebles2/pagina1';
import Pagina2vscreen from '../components/views/inmobiliaria/inmuebles2/pagina2';
import Pagina3vscreen from '../components/views/inmobiliaria/inmuebles2/pagina3';
import { images, COLORS } from "../constants";

function LogoTitle() {
  return (
    <Image
      style={{
        width: 50, height: 50,
        resizeMode: "contain",
      }}
      source={images.bgImage}
    />
  );
}

const Inicio = createStackNavigator({

    inicio:{
      screen:createStackNavigator({
        // Mainmenu: {
        //   screen: Home,
        //   navigationOptions: ({ navigation }) => ({
        //     title: 'Atras',
        //     headerTitle: props => <LogoTitle />,
        //     headerTitleAlign: 'center',
        //     headerStyle: {
        //       backgroundColor: COLORS.blue,
        //     },
        //   })
        // },
        Iniciov1: {
          screen: Iniciov1screen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina1: {
          screen: Pagina1screen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina2: {
          screen: Pagina2screen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina3: {
          screen: Pagina3screen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina1V: {
          screen: Pagina1vscreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina2V: {
          screen: Pagina2vscreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina3V: {
          screen: Pagina3vscreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        }  
          
      },{
        navigationOptions:{
          headerShown:false
        }
      })
    },

});


export default createAppContainer(Inicio)