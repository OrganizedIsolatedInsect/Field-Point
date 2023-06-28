import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Color } from "../styles";

const Breadcrumb = ({navigation, route}) => {
//   const navigation = useNavigation();
//   const route = useRoute();

  // Checks to see if you can navigate back, and if so, go back. Otherwise, do nothing. Prevents a warning.
  // SOURCE: https://reactnavigation.org/docs/navigation-prop#cangoback
  const validateReturn = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  // Build the breadcrumb string and allow it to be pressed to go back to your previous screen. If a previous
  //    route name does not exist, only display the current route name.
  const NavigationLink = () => {
    return (
      <View style={styles.breadcrumb}>
        <Pressable
          onPress={() => {
            validateReturn();
          }}
        >
          <MaterialIcons name="arrow-back" style={styles.backIcon} />
        </Pressable>
        <Text style={styles.breadcrumbText}> {route.name}</Text>
      </View>
    );
  };

  // Actual BreadcrumbBar component. If the route name is Home, do not display breadcrumb.
  return <View>
    {/* {route.name === "Home" ? null :  */}
    <NavigationLink />
    {/* } */}
    </View>;
};

const styles = StyleSheet.create({
  breadcrumb: {
    flexDirection: "row",
    color: Color.primaryText,
    alignItems: "center",
  },
  breadcrumbText: {
    color: Color.primaryText,
    fontSize: 18,
  },
  backIcon: {
    color: Color.primaryText,
    fontSize: 20,
  },
});

export default Breadcrumb;
