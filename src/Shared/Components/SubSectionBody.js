import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

const SubSectionBody = ({ marginalNote, subSectionText, bookmarkGroup }) => {
  console.log(bookmarkGroup);
  return (
    <View style={styles.subSectionBody}>
      <Text style={styles.subSectionBodyHeaderText}>{marginalNote}</Text>
      {subSectionText.map((x) => {
        return <Text style={styles.subSectionBodyText}>{x.Text}</Text>;
      })}
    </View>
  );
};

export default SubSectionBody;
