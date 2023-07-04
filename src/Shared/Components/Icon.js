/*

Icon component for react-native-vector-icons, all 14 icon sets are imported for use in this component.
Pick a icon style and icon name from the list.
see: https://oblador.github.io/react-native-vector-icons/ for list of icon sets and icon names
see: https://github.com/oblador/react-native-vector-icons for github repo

iconStyle: style of the icon based on react-native-vector-icons. See https://oblador.github.io/react-native-vector-icons/ for icon styles
iconName: name of the icon based on icon set name.  See https://oblador.github.io/react-native-vector-icons/ for icon names
iconColor: color of the icon
iconSize: size of the icon
style: accepts style passed as a prop
*/

import { View } from "react-native";
import React from "react";

// Icon imports for react-native-vector-icons
// https://github.com/oblador/react-native-vector-icons#bundled-icon-sets
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const Icon = ({ iconStyle, iconName, iconSize, iconColor, style }) => {
  return (
    <View>
      {/* If else render function */}
      {/* source: https://stackoverflow.com/questions/40477245/is-it-possible-to-use-if-else-statement-in-react-render-function */}

      {(() => {
        if (iconStyle == "AntDesign") {
          return (
            <AntDesign
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "Entypo") {
          return (
            <Entypo
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "EvilIcons") {
          return (
            <EvilIcons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "Feather") {
          return (
            <Feather
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "FontAwesome") {
          return (
            <FontAwesome
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "FontAwesome5") {
          return (
            <FontAwesome5
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "FontAwesome5Brands") {
          return (
            <FontAwesome5
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "Fontisto") {
          return (
            <Fontisto
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "Foundation") {
          return (
            <Foundation
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "Ionicons") {
          return (
            <Ionicons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "MaterialCommunityIcons") {
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "MaterialIcons") {
          return (
            <MaterialIcons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "Octicons") {
          return (
            <Octicons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "SimpleLineIcons") {
          return (
            <SimpleLineIcons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else if (iconStyle == "Zocial") {
          return (
            <Zocial
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={style}
            />
          );
        } else {
          /// return exclamation !!! icons if iconStyle is not defined or mispelled
          return (
            <View style={[{ flexDirection: "row", alignItems: "center" }]}>
              <FontAwesome
                name="exclamation"
                size={iconSize}
                color={iconColor}
              />
              <FontAwesome
                name="exclamation"
                size={iconSize}
                color={iconColor}
              />
              <FontAwesome
                name="exclamation"
                size={iconSize}
                color={iconColor}
              />
            </View>
          );
        }
      })()}

      {/* End if render function */}
    </View>
  );
};

export default Icon;
