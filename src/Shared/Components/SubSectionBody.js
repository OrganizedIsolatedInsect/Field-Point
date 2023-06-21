import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

const SubSectionBody = ({ marginalNote }) => {
  return (
    <View style={styles.subSectionBody}>
      <Text style={styles.subSectionBodyHeaderText}>{marginalNote}</Text>
      <Text style={styles.subSectionBodyText}>Text</Text>
    </View>
  );
};

export default SubSectionBody;
