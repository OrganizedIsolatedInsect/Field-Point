/*

Home Screen Button props

imgURI: uri of the image.  Must include {require("")}, ie: {require("./../../Assets/Imgs/Home-Screen/Resources-button-home-334x120.jpg")}
iconStyle: style of the icon based on react-native-vector-icons. See https://oblador.github.io/react-native-vector-icons/ for icon styles
iconName: name of the icon based on icon set name.  See https://oblador.github.io/react-native-vector-icons/ for icon names
iconColor: color of the icon
iconSize: size of the icon
buttonText: text under the icon
onPress: function to be called when the button is pressed

*/

import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles, { Color } from "../styles.js";
import Icon from "./Icon.js";

const HomeScreenButton = ({
  imgURI,
  buttonText,
  onPress,
  iconStyle,
  iconName,
  iconSize,
  iconColor,
}) => {
  return (
    <Pressable
      android_ripple={{ color: Color.cardBody, foreground: true }}
      onPress={onPress}
    >
      <Image style={styles.homeScreenImg} source={imgURI} />
      <View style={styles.homeScreenButtonView}>
        <Icon
          iconStyle={iconStyle}
          iconName={iconName}
          iconSize={iconSize}
          iconColor={iconColor}
        />

        <Text style={styles.homeScreenButtonText}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default HomeScreenButton;
