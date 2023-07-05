import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "../Icon";
import { BookmarkIcon } from "./BookmarkIcon";
import { RoutingItems } from "../../../Data/RoutingLookups";

import styles from "../../styles";

// Breadcrumb is a navigation component that should reside on the top of all the screens. It allows a user
//  to go back to the previous screen by using the back button.
// It takes the partLabel prop from the CrimCodeSubSectionScreen. This is required to display the part #
//  in the breadcrumb instead of the route name.
const Breadcrumb = ({ partLabel }) => {
  const navigation = useNavigation();
  const route = useRoute();

  // State used to check if the partLabel prop is passed, if it exists display the part #, otherwise display the
  // route name
  const [partLabelExists, setPartLabelExists] = useState(false);
  const [showIcon, setShowIcon] = useState(false); //to enable whether the bookmark icon should display on the current screen.
  useEffect(() => {
    if (partLabel !== undefined) {
      setPartLabelExists(true);
    }
    RoutingItems.find(rt => rt.title == route.name)
      ? setShowIcon(true)
      : setShowIcon(false);
  }, [partLabel, showIcon]);

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
          <Icon
            iconStyle="MaterialIcons"
            iconName="arrow-back"
            style={styles.backIcon}
          />
        </Pressable>
        {partLabelExists ? (
          <Text style={styles.breadcrumbText}> {partLabel}</Text>
        ) : (
          <Text style={styles.breadcrumbText}> {route.name}</Text>
        )}
        {showIcon ? (
          <BookmarkIcon
            title={route.name} //this may have to include a "screen name" prop to ensure that the legislation source is passed to the bookmark icon.  Then a lookup
            sectionNum={route.params.sectionNum} //to the model needs to be done to obtain the "legislation"
            partLabel={route.params.partLabel}
            sectionHeading={route.params.sectionHeading}
          />
        ) : null}
      </View>
    );
  };

  // BlankBar to maintain header height when on the Home screen and not displaying the breadcrumb.
  const BlankBar = () => {
    return <View style={styles.blankBar}></View>;
  };

  // Actual BreadcrumbBar component. If the route name is Home, do not display breadcrumb.
  return (
    <View>
      <View style={styles.breadcrumb}>
        {route.name === "Home" ? <BlankBar /> : <NavigationLink />}
      </View>
    </View>
  );
};

export default Breadcrumb;
