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
import stylesHome from "./HomeScreenStyle.js";
import styles, { Color } from "../../Shared/styles.js";
import Icon from "../../Shared/Components/Icon.js";

const HomeScreenButton = (props) => {
  let imgURI = props.imgURI;
  let buttonText = props.buttonText;
  let onPress = props.onPress;
  let iconStyle = props.iconStyle;
  let iconName = props.iconName;
  let iconSize = props.iconSize;
  let iconColor = props.iconColor;

  return (
    <Pressable
      android_ripple={{ color: Color.cardBody, foreground: true }}
      onPress={onPress}
    >
      <Image style={stylesHome.homeScreenImg} source={imgURI} />
      <View style={stylesHome.homeScreenButtonView}>
        <Icon
          iconStyle={iconStyle}
          iconName={iconName}
          iconSize={iconSize}
          iconColor={iconColor}
        />

        <Text style={stylesHome.homeScreenButtonText}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default HomeScreenButton;
