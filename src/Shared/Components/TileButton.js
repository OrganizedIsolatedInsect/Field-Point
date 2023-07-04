//Compoment for Legislation Screen tiles
//
//props
//imgURI: uri of the image.  Must include {require("")}, ie: {require("./../../Assets/Imgs/Home-Screen/Resources-button-home-334x120.jpg")}
//buttonText: the text from the button
//buttonPress: the name of the screen to pass to the navigator

import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles, { Color } from "../styles.js";
import { useNavigation } from "@react-navigation/native";

const TileButton = ({ imgURI, buttonText, buttonPress, testId }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      android_ripple={{ color: Color.cardBody, foreground: true }}
      onPress={() => navigation.navigate(buttonPress)}
      testID={testId}
    >
      <Image source={imgURI} style={styles.LegislationImg} />
      <View style={styles.LegislationButtonTextView}>
        <Text style={styles.LegislationButtonText}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default TileButton;
