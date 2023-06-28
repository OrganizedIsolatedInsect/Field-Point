import * as React from "react";
import { Pressable, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import styles, { Color } from "../styles";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { CustomHeader } from "../Components/CustomHeader";

import SettingScreen from "../../Screens/Setting/SettingScreen";
import BookmarkScreen from "../../Screens/Bookmark/BookmarkScreen";

import HomeStack from "./HomeStackNavigator";

const BottomTab = createBottomTabNavigator();

// Inserts the custom header into the Navigator
const headerStyleOption = {
  header: ({ navigation, route, options, back }) => {
    return <CustomHeader navigation={navigation} route={route} />;
  },
};

// Tab bar styling props
const tabNavigatorStyle = {
  tabBarStyle: { backgroundColor: Color.headingBackground },
  tabBarInactiveTintColor: Color.inActiveIcon, // color when icon is not picked
  tabBarActiveTintColor: Color.activeIcon, // color when icon is picked
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
      // backBehavior="history" prop is required for navigating back to the last visited screen
      // SOURCE: https://reactnavigation.org/docs/bottom-tab-navigator#backbehavior
      backBehavior="history"
      screenOptions={{ ...headerStyleOption, ...tabNavigatorStyle }}
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
