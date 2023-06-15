import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";

import { Color } from "../styles";

import { Logo } from "./Logo";
import Searchbar from "./Searchbar";
import BreadcrumbBar from "./BreadcrumbBar";

// Custom header displays branding, searchbar and breadcrumb
export const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={{paddingRight: 8}}>
          <Logo />
        </View>
        <Searchbar />
      </View>
      <View>
        <BreadcrumbBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 10,
    backgroundColor: Color.headingBackground,
    height: 110,
    padding: 13,
  },
  topRow: {
    flexDirection: "row",
  },
});
