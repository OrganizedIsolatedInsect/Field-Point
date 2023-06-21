import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

const SubSectionHeader = ({ partLabel, sectionNum, sectionHeading }) => {
  return (
    <View style={styles.subSectionHeader}>
      <View>
        <View style={styles.subSectionPartSectionContainer}>
          <Text style={styles.subSectionHeaderPartText}> {partLabel}</Text>
          <Text style={styles.subSectionHeaderSectionNumText}>
            {sectionNum}
          </Text>
        </View>
      </View>
      <View style={styles.subSectionLabelContainer}>
        <Text style={styles.subSectionHeaderSectionLabelText}>
          {sectionHeading}
        </Text>
      </View>
    </View>
  );
};

export default SubSectionHeader;
