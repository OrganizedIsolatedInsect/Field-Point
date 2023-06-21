import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

const SubSectionHeader = ({ partLabel, sectionNum, sectionHeading }) => {
  return (
    <View style={styles.subSectionHeader}>
      <Text style={styles.sectionsPrimaryText}>
        {partLabel} {sectionNum} {sectionHeading}
      </Text>
    </View>
  );
};

export default SubSectionHeader;
