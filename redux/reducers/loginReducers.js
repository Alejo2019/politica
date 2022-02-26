import Globals from '../../helpers/GlobalsCreators'

const initialState = {
    datalogin: {},
    error: "",
}


export default (state = initialState, action) => {

    switch (action.type) {
        case Globals.Auth.POST_AUTH:

            return {
                ...state,
                datalogin: state.datalogin = action.payload,
            }

        case Globals.Auth.LOGIN_ERROR:
            console.log('ttata', typeof action.payload);
            return {
                ...state,
                error: state.error = action.payload
            }

        default:
            return state

    }

}