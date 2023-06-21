import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import SubSectionHeader from "./SubSectionHeader";

const SubSectionCard = ({ partLabel, sectionNum, sectionHeading }) => {
  return (
    <View style={styles.subSectionHeader}>
      <SubSectionCard
        sectionHeading={sectionHeading}
        sectionNum={sectionNum}
        partLabel={partLabel}
      />
    </View>
  );
};

export default SubSectionCard;
