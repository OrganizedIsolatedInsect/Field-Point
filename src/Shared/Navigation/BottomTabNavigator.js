import * as React from "react";
import { Pressable, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import styles, { Color } from "../styles";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { CustomHeader } from "../Components/CustomHeader";

import HomeScreen from "../../Screens/Home/HomeScreen";
import SettingScreen from "../../Screens/Setting/SettingScreen";
import BookmarkScreen from "../../Screens/Bookmark/BookmarkScreen";
import LegislationScreen from "../../Screens/Legislation/LegislationScreen";

const BottomTab = createBottomTabNavigator();

const Home = createStackNavigator();

// Common navigation screen options pulled out to be reusable against all stacks
const screenOptionStyle = {
  header: ({ navigation, route, options, back }) => {
    return <CustomHeader />;
  },
  tabBarStyle: { backgroundColor: Color.headingBackground },
  tabBarInactiveTintColor: Color.inActiveIcon, // color when icon is not picked
  tabBarActiveTintColor: Color.activeIcon, // color when icon is picked
};

// Temporary HomeStack for routing
const HomeStack = () => {
  return (
    <Home.Navigator
      screenOptions={{ ...screenOptionStyle, headerShown: false }}
    >
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Bookmarks" component={BookmarkScreen} />
      <Home.Screen name="Legislation" component={LegislationScreen} />
    </Home.Navigator>
  );
};

// Bottom Tab Navigator
const AppNavigator = () => {
  //Changes style of the Icon to show a line on top
  const CustomTabButton = (props) => (
    <Pressable
      {...props}
      style={
        props.accessibilityState.selected
          ? [
              props.style,
              {
                borderTopColor: Color.primaryText,
                borderTopWidth: 2,
              },
            ]
          : props.style
      }
    />
  );

  return (
    <BottomTab.Navigator
      screenOptions={screenOptionStyle}
      //set default screen to Home
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="More"
        component={SettingScreen}
        options={{
          tabBarLabel: ({ focused, color, size }) => {
            return (
              <Text
                style={[
                  styles.bottomTabText,
                  { color: focused ? Color.activeIcon : Color.inActiveIcon },
                ]}
              >
                MORE
              </Text>
            );
          },
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="help-center"
              color={color}
              style={styles.bottomTabIconSize}
            />
          ),
          tabBarButton: CustomTabButton,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused, color, size }) => {
            return (
              <Text
                style={[
                  styles.bottomTabText,
                  { color: focused ? Color.activeIcon : Color.inActiveIcon },
                ]}
              >
                HOME
              </Text>
            );
          },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="home"
              color={color}
              style={styles.bottomTabIconSize}
            />
          ),
          tabBarButton: CustomTabButton,
        }}
      />
      <BottomTab.Screen
        name="Bookmarks"
        component={BookmarkScreen}
        options={{
          tabBarLabel: ({ focused, color, size }) => {
            return (
              <Text
                style={[
                  styles.bottomTabText,
                  { color: focused ? Color.activeIcon : Color.inActiveIcon },
                ]}
              >
                BOOKMARKS
              </Text>
            );
          },
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="bookmark-multiple"
              color={color}
              style={styles.bottomTabIconSize}
            />
          ),
          tabBarButton: CustomTabButton,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppNavigator;
