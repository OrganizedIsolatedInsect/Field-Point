/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Text, View } from "react-native";

import Searchbar from "./src/Shared/Components/Searchbar";

const App = () => {
  return (
    <View style={{ backgroundColor: "#000" }}>
      <Searchbar />
    </View>
  );
};

export default App;
