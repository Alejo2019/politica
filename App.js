import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Provider } from 'react-redux';
import store from './store/store';
import Switch from './routes/Switch';

//import { NavigationContainer } from "@react-navigation/native";
// import { MainStackNavigator } from "./Pantallas/Navigation/StackNavigator";
//import DrawerNavigator from "./Pantallas/Navigation/DrawerNavigator";

const App = () => {

  return (

    <Provider store={store}>
      <Switch />
    </Provider>

  );

}
export default App