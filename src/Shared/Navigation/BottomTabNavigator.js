import * as React from "react";

import { Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Colours } from "../styles";
import SettingScreen from "../../Screens/Setting/SettingScreen";
import HomeScreen from "../../Screens/Home/HomeScreen";
import BookmarkScreen from "../../Screens/Bookmark/BookmarkScreen";

const BottomTab = createBottomTabNavigator();

export const AppNavigator = () => {
  //Changes style of the Icon to show a line on top
  const CustomTabButton = props => (
    <Pressable
      {...props}
      style={
        props.accessibilityState.selected
          ? [
              props.style,
              {
                borderTopColor: Colours.primaryText,
                borderTopWidth: 2,
              },
            ]
          : props.style
      }
    />
  );

  //OUTPUT
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontFamily: "Roboto",
          fontSize: 10,
          color: Colours.primaryText,
        },

        headerShown: false,
        tabBarStyle: { backgroundColor: Colours.backgroundColouring },
      })}
    >
      <BottomTab.Screen
        name="More"
        component={SettingScreen}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="help-center" color={color} size={24} />
          ),
          tabBarButton: CustomTabButton,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={24} />
          ),
          tabBarButton: CustomTabButton,
        }}
      />
      <BottomTab.Screen
        name="Bookmarks"
        component={BookmarkScreen}
        options={{
          tabBarLabel: "Bookmarks",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bookmark-multiple"
              color={color}
              size={24}
            />
          ),
          tabBarButton: CustomTabButton,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppNavigator;
