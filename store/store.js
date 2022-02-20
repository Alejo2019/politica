import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CombineReducer from '../redux/reducers/CombineReducers'

const store = createStore(
    CombineReducer,
    applyMiddleware(thunk)
  );

export default store