import * as React from "react";

import { Pressable, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles,{ Color} from "../styles";
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
                borderTopColor: Color.primaryText,
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
        headerShown: false,
        tabBarStyle: { backgroundColor: Color.headingBackground },
        tabBarInactiveTintColor: Color.inActiveIcon, // color when icon is not picked
        tabBarActiveTintColor: Color.activeIcon, // color when icon is picked
      })}
      //set default screen to Home
      initialRouteName="Home"
      
    >
      <BottomTab.Screen
        name="More"
        component={SettingScreen}
        options={{
          tabBarLabel: ({ focused,color,size }) => {
            return <Text style={[styles.bottomTabText,{color: focused ? Color.activeIcon : Color.inActiveIcon}]}>MORE</Text>
          },
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="help-center" color={color} style={styles.bottomTabIconSize} />
          ),
          tabBarButton: CustomTabButton,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused,color,size }) => {
            return <Text style={[styles.bottomTabText,{color: focused ? Color.activeIcon : Color.inActiveIcon}]}>HOME</Text>
          },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name="home" color={color} style={styles.bottomTabIconSize} />
          ),
          tabBarButton: CustomTabButton,
        }}
      />
      <BottomTab.Screen
        name="Bookmarks"
        component={BookmarkScreen}
        options={{
          tabBarLabel: ({ focused,color,size }) => {
            return <Text style={[styles.bottomTabText,{color: focused ? Color.activeIcon : Color.inActiveIcon}]}>BOOMARKS</Text>
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
