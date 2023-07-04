import * as React from "react";
import { Pressable, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import styles, { Color } from "../styles";

import Icon from "../Components/Icon";
import { CustomHeader } from "../Components/header/CustomHeader";

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
      initialRouteName="HomeStack"
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
            <Icon
              iconStyle="MaterialIcons"
              iconName="help-center"
              iconColor={color}
              iconSize={24}
            />
          ),
          tabBarButton: CustomTabButton,
        }}
      />
      <BottomTab.Screen
        name="HomeStack"
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
            <Icon
              iconStyle="FontAwesome"
              iconName="home"
              iconColor={color}
              iconSize={24}
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
            <Icon
              iconStyle="MaterialCommunityIcons"
              iconName="bookmark-multiple"
              iconColor={color}
              iconSize={24}
            />
          ),
          tabBarButton: CustomTabButton,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppNavigator;
