import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

//button created for the parts of legislation, after pushing it will move to the sections portion

/* 
Fields from database as follows
headingLabel = Heading1
partLabel = Heading1_Label
 */

const LegislationPartsButton = ({ headingLabel, partLabel }) => {
  return (
    <Pressable
      onPress={() => {
        console.log("button");
      }}
    >
      <View style={styles.partsButton}>
        <Ionicons
          name="chevron-back-circle"
          style={styles.partsButtonCheveron}
        />
        <View style={styles.headingLabelContainer}>
          <Text style={styles.partsButtonPrimaryText}>
            {/* Temp fix for blank heading1_label for part I */}
            {headingLabel != "" ? headingLabel : "General"}
          </Text>
          <Text style={styles.partsButtonSecondaryText}>{partLabel}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default LegislationPartsButton;
