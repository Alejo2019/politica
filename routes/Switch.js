import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import NoAuth from './Noauth'
import AuthLoader from './AuthLoader'
import Auth from './Auth'
import AuthTestigo from './AuthTestigo'
//se encarga de hacer el cambio cuando el usuario se ha iniciado sesion y cuando no esta iniciado
const Switch = createSwitchNavigator({
    AuthLoader: {
        screen: AuthLoader
    },
    Auth:{
        screen:NoAuth
    },
    App: {
        screen: Auth
    },
    AppTestigo: {
        screen: AuthTestigo
    },
    
}, {    
    initialRouteName: 'AuthLoader'
})

export default createAppContainer(Switch)