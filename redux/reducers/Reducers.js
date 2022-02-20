import Globals from '../../helpers/GlobalsCreators'

const initialState = {
    data: {},
    error: null,

}

export default (state = initialState, action) => {

    switch (action.type) {
        case 1:

            return {
                ...state,
                data: state.data = action.payload,
                error: state.error = ""
            }
    }

}