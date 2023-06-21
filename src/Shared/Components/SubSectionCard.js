import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import SubSectionHeader from "./SubSectionHeader";
import SubSectionBody from "./SubSectionBody";

const SubSectionCard = ({ partLabel, sectionNum, sectionHeading }) => {
  return (
    <View style={styles.subSectionCard}>
      <SubSectionHeader
        sectionHeading={sectionHeading}
        sectionNum={sectionNum}
        partLabel={partLabel}
      />
      <SubSectionBody />
    </View>
  );
};

export default SubSectionCard;
