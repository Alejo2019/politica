import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, Text } from 'react-native';
import Partidoscreen from '../components/views/politica/lider/partido';
import Campañascreen from '../components/views/politica/lider/campaña';
import Moduloscreen from '../components/views/politica/lider/modulo';
import Congresoscreen from '../components/views/politica/lider/congreso/congreso';
import Registroscreen from '../components/views/politica/lider/congreso/registro';
import Reportescreen from '../components/views/politica/lider/congreso/reporte';
import Generarscreen from '../components/views/politica/lider/congreso/generar_reporte';
import Posibles_votantesscreen from '../components/views/politica/lider/congreso/posibles_votantes';
import Metasscreen from '../components/views/politica/lider/congreso/metas';
import Entes_territorialesscreen from '../components/views/politica/lider/senado/entes_territoriales';
import RegistroSscreen from '../components/views/politica/lider/senado/registro';
import ReporteSscreen from '../components/views/politica/lider/senado/reporte';
import GenerarSscreen from '../components/views/politica/lider/senado/generar_reporte';
import Posibles_votantesSscreen from '../components/views/politica/lider/senado/posibles_votantes';
import MetasSscreen from '../components/views/politica/lider/senado/metas';
import Pagina1screen from '../components/views/politica/testigos/pagina1';
import Pagina2screen from '../components/views/politica/testigos/pagina2';
import Pagina4screen from '../components/views/politica/testigos/pagina4';
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
      Partido: {
        screen: Partidoscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Campaña: {
        screen: Campañascreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Modulo: {
        screen: Moduloscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Congreso: {
        screen: Congresoscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Registro: {
        screen: Registroscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Reporte: {
        screen: Reportescreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Generar: {
        screen: Generarscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Posibles_votantes: {
        screen: Posibles_votantesscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Metas: {
        screen: Metasscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Entes_territoriales: {
        screen: Entes_territorialesscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      RegistroI: {
        screen: RegistroSscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      GenerarI: {
        screen: GenerarSscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      ReporteI: {
        screen: ReporteSscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      Posibles_votantesI: {
        screen: Posibles_votantesSscreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Atras',
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.blue,
          },
        })
      },
      MetasI: {
        screen: MetasSscreen,
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
      Pagina2E: {
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
      Pagina4E: {
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

    }, {
      navigationOptions: {
        headerShown: false
      }
    })
  },

});


export default createAppContainer(Inicio)