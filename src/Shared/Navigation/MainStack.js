import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Screens/Home/HomeScreen";
import BookmarkScreen from "../../Screens/Bookmark/BookmarkScreen";
import LegislationScreen from "../../Screens/Legislation/LegislationScreen"

const Main = createStackNavigator();

export const MainStack = () => {
  return (
    <Main.Navigator initialRouteName="Home">
      <Main.Screen name="Home" component={HomeScreen} />
      <Main.Screen name="Bookmarks" component={BookmarkScreen} />
      <Main.Screen name="Legislation" component={LegislationScreen} />
    </Main.Navigator>
  );
};
