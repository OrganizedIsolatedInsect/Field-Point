import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles from "../styles";

const Breadcrumb = ({ partLabel }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const [partLabelExists, setPartLabelExists] = useState(false);

  useEffect(() => {
    if (partLabel !== undefined) {
      setPartLabelExists(true);
    }
  }, [partLabel]);

  // Checks to see if you can navigate back, and if so, go back. Otherwise, do nothing. Prevents a warning.
  // SOURCE: https://reactnavigation.org/docs/navigation-prop#cangoback
  const validateReturn = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  // Build the breadcrumb string and allow it to be pressed to go back to your previous screen. If a previous
  //    route name does not exist, only display the current route name. On the criminal code subsection, display
  //    the Part # instead of a title.
  const NavigationLink = () => {
    return (
      <View style={styles.breadcrumbLink}>
        <Pressable
          onPress={() => {
            validateReturn();
          }}
        >
          <MaterialIcons name="arrow-back" style={styles.backIcon} />
        </Pressable>
        {partLabelExists ? (
          <Text style={styles.breadcrumbText}> {partLabel}</Text>
        ) : (
          <Text style={styles.breadcrumbText}> {route.name}</Text>
        )}
      </View>
    );
  };

  // BlankBar to maintain header height when on the Home screen and not displaying the breadcrumb.
  const BlankBar = () => {
    return <View style={styles.blankBar}></View>;
  };

  // Actual BreadcrumbBar component. If the route name is Home, do not display breadcrumb.
  return (
    <View style={styles.breadcrumb}>
      {route.name === "Home" ? <BlankBar /> : <NavigationLink />}
    </View>
  );
};

export default Breadcrumb;
