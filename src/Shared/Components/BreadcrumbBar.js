import React from "react";
import { View, Text, Pressable, StyleSheet, Button } from "react-native";
import {
  useNavigation,
  useRoute,
  useNavigationState,
} from "@react-navigation/core";

import { Color } from "../styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// To get parent route, need to use useNavigationState
// SOURCE: https://reactnavigation.org/docs/use-navigation-state
// CODE: https://snack.expo.io/?platform=android&name=Navigation%20prop%20reference%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fuse-navigation-state.js

// Alternative? https://github.com/react-navigation/react-navigation/issues/4349

// Breadcrumb bar displays the back icon and the current location title

export default BreadcrumbBar = () => {
  // Hooks required to navigate to different screens and get route names
  const navigation = useNavigation();
  const route = useRoute();

  // Function to set the first route/parent
  const useIsFirstRouteInParent = () => {
    const isFirstRouteInParent = useNavigationState(
      (state) => state.routes[1].key === route.key
    );
    return isFirstRouteInParent;
  };

  // Function to get the previous route name
  const usePreviousRouteName = () => {
    return useNavigationState((state) =>
      state.routes[state.index - 1]?.name
        ? state.routes[state.index - 1].name
        : null
    );
  };
  // Function to get the current route name
  const useCurrentRouteName = () => {
    return useNavigationState((state) => state.routes[state.index]?.name);
  };

  const isFirstRoute = useIsFirstRouteInParent();
  const previousRouteName = usePreviousRouteName();
  const currentRouteName = useCurrentRouteName();

  // Checks to see if you can navigate back, and if so, go back. Otherwise, do nothing. Prevents a warning.
  // SOURCE: https://reactnavigation.org/docs/navigation-prop#cangoback
  const validateReturn = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  // Passed render function for the PreviousRoute validation
  const PreviousRouteRender = () => {
    return (
      <View style={styles.breadcrumb}>
        <Pressable
          onPress={() => {
            validateReturn();
          }}
        >
          {/* <Text style={styles.breadcrumbText}>{previousRouteName}</Text> */}
          <MaterialIcons name="arrow-back" style={styles.backIcon} />
        </Pressable>
        <Text>  </Text>
        {/* <Text style={styles.breadcrumbText}> &gt; </Text> */}
      </View>
    );
  };

  // Build the breadcrumb string and allow it to be pressed to go back to your previous screen. If a previous
  //    route name does not exist, only display the current route name.
  const NavigationLink = () => {
    return (
      <View style={styles.breadcrumb}>
        {previousRouteName ? <PreviousRouteRender /> : null}
        <Text style={styles.breadcrumbText}>{currentRouteName}</Text>
      </View>
    );
  };

  // Actual BreadcrumbBar component
  return <View>{isFirstRoute ? null : <NavigationLink />}</View>;
};

const styles = StyleSheet.create({
  breadcrumb: {
    flexDirection: "row",
    color: Color.primaryText,
    alignItems: "center",
  },
  breadcrumbText: {
    color: Color.primaryText,
    fontSize: 14,
  },
  backIcon: {
    color: Color.primaryText,
    fontSize: 14,
  },
});
