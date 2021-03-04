// React Modules
import React from "react";

// Third party libraries
import { connect } from "react-redux";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// Containers
import MainScreen from "containers/MainScreen";
import ProductListScreen from "containers/Product"


import { navigationOption, horizontalAnimation } from "./configurations";


const Stack = createStackNavigator();

const RootNavigator = ({ ...props }) => {

  return (
    <Stack.Navigator headerMode="none" screenOptions={horizontalAnimation}
      initialRouteName="ProductListScreen">

     <Stack.Screen
      name="MainScreen"
      component={MainScreen}
      options={{
        gestureEnabled: false,
      }}
      />

      <Stack.Screen
        name="ProductListScreen"
        component={ProductListScreen}
      />

    </Stack.Navigator>
  );
};
//if you need to add pros add here
export default connect(null, null)(RootNavigator);
