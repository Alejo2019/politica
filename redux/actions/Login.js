import Globals from "../../helpers/GlobalsCreators"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const Auth = (correo, contraseña) => async (dispatch) => {

    return new Promise(async (reject) => {
        try {

            const response = await axios.post(Globals.API + '/api/auth/login', { correo, contraseña })

            dispatch({
                type: Globals.Auth.POST_AUTH,
                payload: response.data,
            })


        } catch (error) {
            reject(error.message);

        }

    })

}