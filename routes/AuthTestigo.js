import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, Text } from 'react-native';
import Pagina1escreen from '../components/views/politica/testigos/pagina1';
import Pagina2escreen from '../components/views/politica/testigos/pagina2';
import Pagina3escreen from '../components/views/politica/testigos/pagina3';
import Pagina4escreen from '../components/views/politica/testigos/pagina4';
import Pagina5escreen from '../components/views/politica/testigos/pagina5';
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
        Pagina1L: {
          screen: Pagina1escreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina2L: {
          screen: Pagina2escreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        }, 
        Pagina3L: {
          screen: Pagina3escreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina4L: {
          screen: Pagina4escreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },  
        Pagina5L: {
          screen: Pagina5escreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        }, 
      },{
        navigationOptions:{
          headerShown:false
        }
      })
    },

});


export default createAppContainer(Inicio)