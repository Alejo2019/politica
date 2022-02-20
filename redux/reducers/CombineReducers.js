import { combineReducers } from 'redux'

import login from './loginReducers';
import reducers from './Reducers';

export default combineReducers({
    test: () => 'test reducer'
})