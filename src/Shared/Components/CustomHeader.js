import React from "react";
import { View, StyleSheet } from "react-native";

import { Color } from "../styles";

import { Logo } from "./Logo";
import Searchbar from "./Searchbar";
import BreadcrumbBar from "./BreadcrumbBar";

// Custom header displays branding/logo, searchbar and breadcrumb

// Because React Native does not support the outline style prop, we've had to manually simulate the outline
//    function by using the borderWidth and making it "on" or "off" with the isFocused state. To achieve this,
//    container has a paddingTop of 10, and the logoPadding has a padding of 3 giving a total paddingTop of 13.
//    The logoPadding of 3 is required as the Searchbar has a borderWidth of 3 and without the padding and
//    additional height on that container (56, with 3 on top and bottom), it makes the logo offset from the
//    searchbar by 3. The same had to be done with the topRowSpacing.

// Logo can take the logoHeight and logoWidth arguments. By default, it will be H400 x W416 (full size image)

export const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.topRowSpacing}>
          <View style={styles.logoPadding}>
            <Logo logoHeight={49} logoWidth={50} />
          </View>
        </View>
        <Searchbar />
      </View>
      <View style={styles.bottomRow}>
        <BreadcrumbBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: Color.headingBackground,
    height: 110,
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
    height: 52,
    justifyContent: "center",
  },
  topRowSpacing: {
    paddingRight: 5,
  },
  logoPadding: {
    paddingTop: 3,
  },
  bottomRow: {
    marginTop: 24,
  },
});