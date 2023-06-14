import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

//button created for the parts of legislation, after pushing it will move to the sections portion

const LegislationPartsButton = ({ headingLabel, partLabel }) => {
  return (
    <View style={styles.partsButton}>
      <Ionicons name="chevron-back-circle" style={styles.partsButtonCheveron} />
      <View>
        <Text style={styles.partsButtonPrimaryText}>
          {/* Temp fix for blank heading1_label for part I */}
          {headingLabel != "" ? headingLabel : "General"}
        </Text>
        <Text style={styles.partsButtonSecondaryText}>{partLabel}</Text>
      </View>
    </View>
  );
};

export default LegislationPartsButton;
