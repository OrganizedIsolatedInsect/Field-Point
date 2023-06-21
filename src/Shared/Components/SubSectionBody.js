import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

const SubSectionBody = ({ marginalNote, subSectionData, bookmarkGroup }) => {
  const filtedSubSectionTextArray = subSectionData.filter((x) => {
    return x.bookmarkGroup == bookmarkGroup;
  });

  console.log(filtedSubSectionTextArray);

  return (
    <View style={styles.subSectionBody}>
      <Text style={styles.subSectionBodyHeaderText}>{marginalNote}</Text>
    </View>
  );
};

export default SubSectionBody;
