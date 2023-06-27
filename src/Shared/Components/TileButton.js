import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles, { Color } from "../styles.js";
import { useNavigation } from "@react-navigation/native";

const TileButton = ({ imgURI, buttonText, buttonPress }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      android_ripple={{ color: Color.cardBody, foreground: true }}
      onPress={() => navigation.navigate(buttonPress)}
    >
      <Image source={imgURI} style={styles.LegislationImg} />
      <View style={styles.LegislationButtonTextView}>
        <Text style={styles.LegislationButtonText}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default TileButton;
