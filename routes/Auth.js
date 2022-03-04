import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, Text } from 'react-native';
import Iniciov1screen from '../components/views/politica/lider/inicio';
import Iniciov2screen from '../components/views/politica/lider/inicio2';
import Pagina1screen from '../components/views/politica/lider/congreso/pagina1';
import Pagina2screen from '../components/views/politica/lider/congreso/pagina2';
import Pagina3screen from '../components/views/politica/lider/congreso/pagina3';
import Pagina4screen from '../components/views/politica/lider/congreso/pagina4';
import Pagina5screen from '../components/views/politica/lider/congreso/pagina5';
import Pagina6screen from '../components/views/politica/lider/congreso/pagina6';
import Pagina7screen from '../components/views/politica/lider/congreso/pagina7';
import Pagina8screen from '../components/views/politica/lider/congreso/pagina8';
import Pagina9screen from '../components/views/politica/lider/congreso/pagina9';
import Pagina1Sscreen from '../components/views/politica/lider/senado/pagina1';
import Pagina2Sscreen from '../components/views/politica/lider/senado/pagina2';
import Pagina3Sscreen from '../components/views/politica/lider/senado/pagina3';
import Pagina4Sscreen from '../components/views/politica/lider/senado/pagina4';
import Pagina5Sscreen from '../components/views/politica/lider/senado/pagina5';
import Pagina6Sscreen from '../components/views/politica/lider/senado/pagina6';
import Pagina7Sscreen from '../components/views/politica/lider/senado/pagina7';
import Pagina8Sscreen from '../components/views/politica/lider/senado/pagina8';
import Pagina9Sscreen from '../components/views/politica/lider/senado/pagina9';
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

  inicio: {
    screen: createStackNavigator({
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
      Iniciov2: {
        screen: Iniciov2screen,
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
      Pagina9: {
        screen: Pagina9screen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Pagina1I: {
        screen: Pagina1Sscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
    Pagina2I: {
        screen: Pagina2Sscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Pagina3I: {
        screen: Pagina3Sscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Pagina4I: {
        screen: Pagina4Sscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Pagina5I: {
        screen: Pagina5Sscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Pagina6I: {
        screen: Pagina6Sscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Pagina7I: {
        screen: Pagina7Sscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Pagina8I: {
        screen: Pagina8Sscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Pagina9I: {
        screen: Pagina9Sscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
    }, {
      navigationOptions: {
        headerShown: false
      }
    })
  },

});


export default createAppContainer(Inicio)