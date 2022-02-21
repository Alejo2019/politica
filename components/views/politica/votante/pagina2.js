import React from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert

} from 'react-native';
import { images, COLORS, CSS } from "../../../../constants";


function pagina2(props) {
  
  let { navigation } = props;

  return (
    
    <View style={CSS.homeContainer}>
  
      {/* <TouchableOpacity style={CSS.cardTitleContainer} onPress={() => navigation.navigate({ routeName: 'ProfileProviders'})}>
        <View style={{ alignSelf: "center", alignItems: "flex-start" }}>
          <View>
            <Text style={CSS.tituloHome}>
            <Text style={CSS.cardHomeTitleTitle}>Hola usuario
              </Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity> */}
      <View style={CSS.containerHome}>
        <ScrollView>

          {/* <TouchableOpacity style={CSS.cardHome} onPress={() => navigation.navigate({ routeName: 'Iniciov1' })}>
            <View style={CSS.viewCardHome}>
              <View style={{ flex: 4, marginLeft:10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                  </View>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={CSS.tituloHome}>
                      algun texto
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ flex: 1, alignSelf:'center' }} >
                <Icon name="chevron-right" size={80}
                  color={COLORS.blue} />
              </View>
            </View>
          </TouchableOpacity> */}
           <Image
                style={CSS.img}
                source={images.logo2}
            />

            <Text style={{
                marginTop: hp('3%'),
                marginBottom: hp('1'),
                fontSize: hp('3%'),
                textAlign: 'center',
                color: '#132196',
                fontWeight: 'bold'

            }}> REGISTRO DE VOTANTES
            </Text>

            <RNPickerSelect
                  style={CSS.select}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeScript", value: "TypeScript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             />
             <RNPickerSelect
                  style={CSS.select}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeScript", value: "TypeScript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             />

            <Text style={CSS.asterisco}>*</Text>
            <TextInput style={CSS.input}
                underlineColorAndroid="transparent"
                placeholder="Mesa de votación"
                placeholderTextColor="#132196"
                autoCapitalize="none"

            />
            <Text style={CSS.asterisco}>*</Text>
            <TextInput style={CSS.input}
                underlineColorAndroid="transparent"
                placeholder="Partido/Candidato"
                placeholderTextColor="#132196"
                autoCapitalize="none"

            />
                      
            

            <Text style={CSS.pririodad}>
                Los campos con * es obligatorio
            </Text>

            <TouchableOpacity
                style={{
                    ...CSS.siguiente,
                    backgroundColor: '#132196'
                }}
                onPress={() => navigation.navigate({ routeName: 'Pagina3V' })}
            >
                <Text style={CSS.siguientetext}>GUARDAD</Text>
            </TouchableOpacity>



          {/* <TouchableOpacity style={CSS.cardHome} onPress={() => navigation.navigate({ routeName: 'Iniciov1' })}>
            <View style={CSS.viewCardHome}>
              <View style={{ flex: 4, marginLeft:10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image source={images.logo2} style={CSS.HomeProviderimagen} />
                  </View>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={CSS.tituloHome}>
                      algun texto
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ flex: 1, alignSelf:'center' }} >
                <Icon name="chevron-right" size={80}
                  color={COLORS.blue} />
              </View>
            </View>
          </TouchableOpacity> */}

        </ScrollView>
      </View>
    </View >
  );
};

export default pagina2;