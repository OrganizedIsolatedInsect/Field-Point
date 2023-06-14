import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

//button created for the parts of legislation, after pushing it will move to the sections portion

const LegislationPartsButton = () => {
  return (
    <View style={styles.partsButton}>
      <Ionicons name="chevron-back-circle" style={styles.partsButtonCheveron} />
      <View>
        <Text style={styles.partsButtonPrimaryText}>
          LegislationPartsButton
        </Text>
        <Text style={styles.partsButtonSecondaryText}>
          LegislationPartsButton
        </Text>
      </View>
    </View>
  );
};

export default LegislationPartsButton;
