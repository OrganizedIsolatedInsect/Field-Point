/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "react-native-gesture-handler"; //this must be at the top of the app as per https://reactnavigation.org/docs/stack-navigator/
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/Shared/Navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import store from "./src/Redux/store";


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
