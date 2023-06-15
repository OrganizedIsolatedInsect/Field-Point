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
import { Logo } from "./src/Shared/Components/Logo";

const App = () => {
  return (
    <NavigationContainer>
      <Logo 
      // logoHeight={51} logoWidth={57} 
      />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
