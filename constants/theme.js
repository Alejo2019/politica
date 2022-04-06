import { Dimensions, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width: WIDTH } = Dimensions.get("window");

export const COLORS = {
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#1E1F20",
    gray: "#ABAFB8",
    blue: '#316BFC'
}

export const CSS = StyleSheet.create({
    /*HOME start*/
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    cardTitleContainer: {
        flex: 2,
        flexDirection: 'row',
        width: WIDTH - 20,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
    },
    cardTitleTitle: {
        color: COLORS.black,
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold'
    },

    containerHome: {
        flex: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },

    cardHome: {
        width: WIDTH - 10,
        height: 150,
        backgroundColor: COLORS.white,
        margin: 5,
        borderRadius: 8,
        borderColor: COLORS.blue,
        borderWidth: 0.5,
        alignSelf: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
    },
    cardHome1: {
        width: WIDTH - 10,
        height: 150,
        backgroundColor: COLORS.white,
        margin: 5,
        borderRadius: 8,
        borderColor: COLORS.blue,
        borderWidth: 0.5,
        alignSelf: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
    },
    cardHome2: {
        width: WIDTH - 10,
        height: 150,
        backgroundColor: COLORS.white,
        margin: 5,
        borderRadius: 8,
        borderColor: COLORS.blue,
        borderWidth: 0.5,
        alignSelf: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
    },
    cardHome3: {
        width: WIDTH - 10,
        height: hp('10%'),
        backgroundColor: COLORS.white,
        margin: 5,
        borderRadius: 8,
        borderColor: COLORS.blue,
        borderWidth: 0.5,
        alignSelf: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
    },
    viewCardHome: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tituloHome: {
        fontSize: hp('1.9%'),
        color: '#132196',
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: wp('3%')
    },
    tituloHome1: {
        margin: 15,
        marginTop: hp('-1%'),
        height: hp('5'),
        width: wp('26%'),
        backgroundColor: '#B7B7BB',
        borderRadius: hp('1.5%'),
        textAlign: 'center',
        color: '#132196'
    },
    tituloHome2: {
        margin: 15,
        marginTop: hp('2%'),
        width: wp('26%'),
        borderRadius: hp('1.5%'),
        textAlign: 'center',
        color: '#132196'
    },
    tituloHome3: {
        margin: 15,
        marginTop: hp('-1%'),
        width: wp('26%'),
        borderRadius: hp('1.5%'),
        textAlign: 'center',
        color: '#132196'

    },
    tituloHome4: {
        margin: 15,
        marginTop: hp('-1%'),
        width: wp('26%'),
        borderRadius: hp('1.5%'),
        textAlign: 'center',
        color: '#132196'
    },
    tituloHome5: {
        fontSize: hp('1.9%'),
        width: wp('50%'),
        color: '#132196',
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: wp('3%')
    },
    tituloHome6: {
        margin: 15,

        height: hp('5'),
        width: wp('26%'),
        backgroundColor: '#B7B7BB',
        borderRadius: hp('1.5%'),
        textAlign: 'center',
        color: '#132196'
    },
    tituloHome7: {
        margin: 15,

        height: hp('5'),
        width: wp('30%'),
        backgroundColor: '#B7B7BB',
        borderRadius: hp('1.5%'),
        textAlign: 'center',
        color: '#132196',

    },
    textDescriHome: {
        color: COLORS.lightGray,
        textAlign: 'justify',
        marginLeft: 5,
        fontSize: 17
    },
    HomeProviderimagen: {
        height: hp('5%'),
        width: wp('30%'),
        margin: hp('1%'),
        resizeMode: 'contain'
    },
    HomeProviderimagen1: {
        height: hp('10%'),
        width: wp('30%'),
        margin: hp('1%'),
        resizeMode: 'contain'
    },
    

    HomeProviderimagenSolicitud: {
        width: 60,
        height: 60,
        margin: 5,
        resizeMode: 'contain'
    },
    /*HOME END*/

    /*LOGIN START */
    Logincontainer: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#fff",
    },
    Logincontainer1: {
        position: 'relative',
        flex: 1,
        backgroundColor: "blue",

    },

    LoginLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    LogintinyLogo: {
        height: hp('20%'), // 70% of height device screen
        width: wp('40%'),   // 80% of width device screen
        marginTop: hp('-20'),
        resizeMode: "contain",
    },

    tinyLogo: {
        width: 250,
        height: 250,
        resizeMode: "contain",
    },

    LogininputIcon: {
        position: 'absolute',
        top: 14,
        left: 50,
    },
    LogincontainerBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    LoginbtnLogin: {
        width: WIDTH - 70,
        height: 60,
        borderRadius: 15,
        backgroundColor: '#3773E1',
        borderColor: "transparent",
        borderWidth: 3,
        justifyContent: 'center',

    },
    Logintext: {
        color: '#fff',
        fontSize: hp('3%'),
        textAlign: 'center',


    },
    /*LOGIN END*/
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        width: wp('80%'),
        height: hp('10%'),
        backgroundColor: 'red',
        //borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp('11%'),
        borderRadius: 15
    },
    cerrar: {
        width: wp('80%'),
        height: hp('10%'),
        backgroundColor: 'red',
        //borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp('11%'),
        borderRadius: 15
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: hp('2.5%'),
        fontWeight: 'bold'
    },
    botonGrande1: {
        width: wp('80%'),
        height: hp('10%'),
        backgroundColor: 'red',
        //borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp('11%'),
        borderRadius: 15
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: hp('2.5%'),
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuBoton: {
        marginVertical: 10
    },
    menuTexto: {
        fontSize: 20
    },
    img: {
        width: wp('30%'),
        height: hp('50'),
        resizeMode: "contain",
        marginLeft: wp('36%'),
        marginBottom: hp('-10%'),

    },
    input: {
        margin: 15,
        height: hp('5'),
        width: wp('75%'),
        marginLeft: hp('6.5%'),
        backgroundColor: '#B7B7BB',
        borderRadius: 15,
        textAlign: 'center',
        color: '#132196'

    },
    asterisco: {
        fontSize: hp('2%'),
        marginBottom: hp('-2%'),
        marginLeft: hp('7%'),
        color: 'red',

    },
    asterisco1: {

        marginBottom: hp('-2%'),



    },
    siguiente: {
        width: wp('50%'),
        height: hp('5%'),
        backgroundColor: 'red',
        //borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp('26.5%'),
        borderRadius: 15,
        marginBottom: 10
    },
    siguientetext: {
        color: 'white',
        fontSize: hp('2%'),
        fontWeight: 'bold'
    },
    siguientetext1: {
        color: 'white',
        fontSize: hp('1.6%'),
        fontWeight: 'bold'
    },
    siguiente1: {
        width: wp('50%'),
        height: hp('5%'),
        backgroundColor: 'red',
        //borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('2%'),
        marginLeft: wp('26%'),
        borderRadius: 15
    },
    siguiente2: {
        width: wp('75%'),
        height: hp('5%'),
        backgroundColor: 'red',
        //borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('2%'),
        marginLeft: wp('14%'),
        borderRadius: 15
    },
    siguientecontainer: {
        marginTop: hp('5')
    },
    pririodad: {
        fontSize: hp('2%'),
        marginBottom: hp('2%'),
        marginLeft: hp('8.5%'),
        color: 'red',
    },
    img1: {
        height: hp('20%'), // 70% of height device screen
        width: wp('40%'),   // 80% of width device screen
        marginLeft: wp('25%'),
    },
    buscar: {
        margin: hp('2.1%'),
        height: hp('4.5%'), // 70% of height device screen
        width: wp('60%'),
        alignItems: 'center',
        backgroundColor: '#B7B7BB',
        borderRadius: hp('4.5%'),
        textAlign: 'center',
        marginBottom: hp('5%')

    },
    select: {
        margin: 15,
        height: 40,
        backgroundColor: '#B7B7BB',
        marginTop: hp('15%')
    },
    inputlogin: {
        textAlign: 'center',
        color: '#132196'
    },
    inputlogin1: {
        marginTop: hp('5%'),

    },
    boton: {
        width: wp('40%'),
        height: hp('5%'),
        backgroundColor: '#132196',
        //borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp('5%'),
    },
    boton1: {
        width: wp('40%'),
        height: hp('5%'),
        backgroundColor: '#132196',
        //borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp('10%'),
    },
    botontext: {
        color: 'white',
        fontSize: hp('2%'),
        fontWeight: 'bold'
    },
    icon: {
        fontSize: hp('5%'),
        color: 'black',
        marginLeft: wp('88%'),
        color: '#132196'
    },
    pdf: {
        fontSize: hp('4%'),
        marginLeft: wp('88%'),
        color: '#132196',
        marginBottom: hp('-5%'),
        marginTop: hp('5%')
    },
    checkbox: {
        marginLeft: wp('2%'),
        marginRight: wp('2%'),
        marginTop: hp('1%')
    },
    asteriscocheck: {
        fontSize: hp('2%'),
        marginBottom: hp('-2%'),
        marginLeft: hp('0.5%'),
        color: 'red',
    },
    inputcheck: {
        margin: 15,
        height: hp('5'),
        width: wp('75%'),
        marginLeft: hp('6.5%'),
        borderRadius: 15,
        textAlign: 'center',
        color: '#132196'

    },
    reporte: {
        marginLeft: hp('4.5%'),
    },
    reporte1: {
        marginLeft: hp('6%'),
        alignItems: 'center'
    }

});

const customTheme = { COLORS, CSS };

export default customTheme;