import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

const SubSectionBody = ({ marginalNote, subSectionData, bookmarkGroup }) => {
  const filtedSubSectionTextArray = subSectionData.filter((x) => {
    return x.BookmarkGroup == bookmarkGroup;
  });

  return (
    <View style={styles.subSectionBody}>
      <Text style={styles.subSectionBodyHeaderText}>{marginalNote}</Text>
      {filtedSubSectionTextArray.map((x) => {
        if (x.IndentLevel === "1") {
          return (
            <View style={styles.subSectionBodyLevel1}>
              <Text style={styles.subSectionBodyText}>{x.Text}</Text>
            </View>
          );
        }
        if (x.IndentLevel === "2") {
          return (
            <View style={styles.subSectionBodyLevel2}>
              <Text style={styles.subSectionBodyText}>{x.Text}</Text>
            </View>
          );
        }
        if (x.IndentLevel === "3") {
          return (
            <View style={styles.subSectionBodyLevel3}>
              <Text style={styles.subSectionBodyText}>{x.Text}</Text>
            </View>
          );
        }
      })}
    </View>
  );
};

export default SubSectionBody;
