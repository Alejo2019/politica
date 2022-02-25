import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, Text } from 'react-native';
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import Home from '../components/views/inmobiliaria/Home';
import Iniciov1screen from '../components/views/politica/lider/inicio';
import Pagina1screen from '../components/views/politica/lider/pagina1';
import Pagina2screen from '../components/views/politica/lider/pagina2';
import Pagina3screen from '../components/views/politica/lider/pagina3';
import Pagina4screen from '../components/views/politica/lider/pagina4';
import Pagina5screen from '../components/views/politica/lider/pagina5';
import Pagina6screen from '../components/views/politica/lider/pagina6';
import Pagina7screen from '../components/views/politica/lider/pagina7';
import Pagina8screen from '../components/views/politica/lider/pagina8';
import Pagina1escreen from '../components/views/politica/testigos/pagina1';
import Pagina2escreen from '../components/views/politica/testigos/pagina2';
import Pagina3escreen from '../components/views/politica/testigos/pagina3';
import Loginscreen from '../components/views/login/login'
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
        Pagina4: {
          screen: Pagina4screen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina5: {
          screen: Pagina5screen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina6: {
          screen: Pagina6screen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina7: {
          screen: Pagina7screen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        },
        Pagina8: {
          screen: Pagina8screen,
          navigationOptions: ({ navigation }) => ({
            title: 'Atras',
            headerTitle: props => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
          })
        }, 
        Pagina1E: {
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
        Pagina2E: {
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
        Pagina3E: {
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
        Login: {
          screen: Loginscreen,
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