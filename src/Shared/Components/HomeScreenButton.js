/*

Home Screen Button props

imgURI: uri of the image.  Must include {require("")}, ie: {require("./../../Assets/Imgs/Home-Screen/Resources-button-home-334x120.jpg")}
iconStyle: style of the icon based on react-native-vector-icons. See https://oblador.github.io/react-native-vector-icons/ for icon styles
iconName: name of the icon based on icon set name.  See https://oblador.github.io/react-native-vector-icons/ for icon names
iconColor: color of the icon
iconSize: size of the icon
buttonText: text under the icon
buttonPress: the navigation screen name

*/

import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles, { Color } from "../styles.js";
import Icon from "./Icon.js";
import { useNavigation } from "@react-navigation/native";

const HomeScreenButton = ({
  imgURI,
  buttonText,
  buttonPress,
  iconStyle,
  iconName,
  iconSize,
  iconColor,
  testId,
}) => {
  const navigation = useNavigation();

  console.log(testId);

  return (
    <Pressable
      android_ripple={{ color: Color.cardBody, foreground: true }}
      onPress={() => navigation.navigate(buttonPress)}
      testID={testId}
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
