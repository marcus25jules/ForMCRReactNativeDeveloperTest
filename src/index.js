import React from "react";
import { Provider, useSelector } from "react-redux";
import RootScreen from "./containers/Root";


import configureStore from '@lib/configureStore'

import {
  NavigationContainer,
} from "@react-navigation/native";



import { navigationRef } from "./navigation/navigationGlobalRef";

//Import State
import ProductInitialState from '@reducers/product/productInitialState'


function getInitialState() {
  const _initState = {
    product: new ProductInitialState()
  }
  return _initState
}


const store = configureStore(getInitialState())

const App = () => {

  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

const AppContent = (props) => {

  return (
    <NavigationContainer
      {...props}
      ref={navigationRef}>
        <RootScreen />
    </NavigationContainer>
  );
};

export default App;
